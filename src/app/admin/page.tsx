'use client'

import { EditorContent, EditorContext, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { BlockquoteButton } from '@/components/tiptap-ui/blockquote-button'
import { HeadingButton, Level } from '@/components/tiptap-ui/heading-button'
import { LinkPopover } from '@/components/tiptap-ui/link-popover'
import { MarkButton } from '@/components/tiptap-ui/mark-button'
import { ImageUploadButton } from '@/components/tiptap-ui/image-upload-button'
import { ImageUploadNode } from '@/components/tiptap-node/image-upload-node'
import { Image } from '@tiptap/extension-image'
import { handleImageUpload, MAX_FILE_SIZE } from '@/lib/tiptap-utils'

import '@/components/tiptap-node/paragraph-node/paragraph-node.scss'

export default function MyEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      ImageUploadNode.configure({
        accept: 'image/*',
        maxSize: MAX_FILE_SIZE,
        limit: 3,
        upload: handleImageUpload,
        onError: (error) => console.error('Upload failed:', error),
      }),
    ],
    immediatelyRender : false,
    content: `
      <blockquote>
        <p>"The best way to predict the future is to invent it."</p><p>— Alan Kay</p>
      </blockquote>
    `,
  })

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen py-6 px-4">
      <EditorContext.Provider value={{ editor }}>
        {/* Toolbar */}
        <div className="flex flex-wrap gap-2 justify-start items-center p-3 mb-4 rounded-lg bg-[#1a1a1a] shadow-sm border border-neutral-700">
          {/* Quotes */}    
          <BlockquoteButton />

          {/* Headings */}
          {[1, 2, 3, 4].map((level) => (
            <HeadingButton key={level} level={level as Level} />
          ))}

          {/* Links */}
          <LinkPopover />

          {/* Marks */}
          <MarkButton type="bold" />
          <MarkButton type="italic" />
          <MarkButton type="strike" />
          <MarkButton type="code" />
          <MarkButton type="underline" />
          <MarkButton type="superscript" />
          <MarkButton type="subscript" />

          {/* Images */}
          <ImageUploadButton text="Image" />
        </div>

        {/* Editor Area */}
        <div className="bg-gray-900  rounded-lg p-6 shadow-md min-h-[100vh] prose prose-neutral max-w-none dark:prose-invert text-white ">
          <EditorContent editor={editor} />
        </div>
      </EditorContext.Provider>
    </div>
  )
}
