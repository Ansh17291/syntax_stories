import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/db'
import {Blog} from '@/models/blog'
import { v4 as uuidv4 } from 'uuid'
import ImageKit from 'imagekit'
import mime from 'mime-types'

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
})

async function uploadToImageKit(file: File, folder: string) {
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  const fileName = `${folder}/${uuidv4()}.${mime.extension(file.type)}`

  const result = await imagekit.upload({
    file: buffer,
    fileName,
    folder,
  })

  return result.url
}

// extract and upload base64 images in content
async function replaceEmbeddedImages(markdown: string): Promise<string> {
  const regex = /!\[(.*?)\]\((blob:[^)]+)\)/g
  let match: RegExpExecArray | null
  const imageUrls: { blob: string; url: string }[] = []

  while ((match = regex.exec(markdown)) !== null) {
    const blobUrl = match[2]

    try {
      const res = await fetch(blobUrl)
      const blob = await res.blob()
      const file = new File([blob], `embed-${uuidv4()}.png`, {
        type: blob.type,
      })

      const uploadedUrl = await uploadToImageKit(file, 'blogs/embedded')
      imageUrls.push({ blob: blobUrl, url: uploadedUrl })
    } catch (err) {
      console.error('Image upload error:', err)
    }
  }

  let updatedMarkdown = markdown
  for (const img of imageUrls) {
    updatedMarkdown = updatedMarkdown.replace(img.blob, img.url)
  }

  return updatedMarkdown
}

export async function POST(req: NextRequest) {
  await connectDB()
  const formData = await req.formData()

  const title = formData.get('title') as string
  let content = formData.get('content') as string
  const file = formData.get('cover') as File | null

  let coverUrl = ''
  if (file) {
    coverUrl = await uploadToImageKit(file, 'blogs/covers')
  }

  content = await replaceEmbeddedImages(content)

  const slug = title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now()

  const blog = await Blog.create({
    title,
    slug,
    content,
    cover: coverUrl,
    publishDate: new Date(),
    estimatedTimeToRead: `${Math.ceil(content.split(' ').length / 200)} min read`,
  })

  return NextResponse.json(blog, { status: 201 })
}
