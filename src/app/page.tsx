import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroStatement from '@/components/heroStatement';

export default function Home() {
  const blogs = [
    {
      title: "React Tailwind Newsletter Component",
      shortDescription: "Learn how to build a responsive newsletter component using React and Tailwind CSS.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "react-tailwind-newsletter-component",
      publishDate: "2024-07-14",
      estimatedTimeToRead: "5 min read",
      tags: undefined,
    },
    {
      title: "Another Blog Example",
      shortDescription: "This is an example of another blog card to show layout.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "another-blog-example",
      publishDate: "2024-07-20",
      estimatedTimeToRead: "6 min read",
      tags: undefined,
    },
    {
      title: "React Tailwind Newsletter Component",
      shortDescription: "Learn how to build a responsive newsletter component using React and Tailwind CSS.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "react-tailwind-newsletter-component",
      publishDate: "2024-07-14",
      estimatedTimeToRead: "5 min read",
      tags: undefined,
    },
    {
      title: "Another Blog Example",
      shortDescription: "This is an example of another blog card to show layout.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "another-blog-example",
      publishDate: "2024-07-20",
      estimatedTimeToRead: "6 min read",
      tags: undefined,
    },
    {
      title: "React Tailwind Newsletter Component",
      shortDescription: "Learn how to build a responsive newsletter component using React and Tailwind CSS.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "react-tailwind-newsletter-component",
      publishDate: "2024-07-14",
      estimatedTimeToRead: "5 min read",
      tags: undefined,
    },
    {
      title: "Another Blog Example",
      shortDescription: "This is an example of another blog card to show layout.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "another-blog-example",
      publishDate: "2024-07-20",
      estimatedTimeToRead: "6 min read",
      tags: undefined,
    },
    {
      title: "React Tailwind Newsletter Component",
      shortDescription: "Learn how to build a responsive newsletter component using React and Tailwind CSS.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "react-tailwind-newsletter-component",
      publishDate: "2024-07-14",
      estimatedTimeToRead: "5 min read",
      tags: undefined,
    },
    {
      title: "Another Blog Example",
      shortDescription: "This is an example of another blog card to show layout.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "another-blog-example",
      publishDate: "2024-07-20",
      estimatedTimeToRead: "6 min read",
      tags: undefined,
    },
    {
      title: "React Tailwind Newsletter Component",
      shortDescription: "Learn how to build a responsive newsletter component using React and Tailwind CSS.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "react-tailwind-newsletter-component",
      publishDate: "2024-07-14",
      estimatedTimeToRead: "5 min read",
      tags: undefined,
    },
    {
      title: "Another Blog Example",
      shortDescription: "This is an example of another blog card to show layout.",
      cover: "https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80",
      slug: "another-blog-example",
      publishDate: "2024-07-20",
      estimatedTimeToRead: "6 min read",
      tags: undefined,
    },
  ];

  return (
    <main>
      <Navbar />
      <HeroStatement />

      {/* Blog Section */}
      <section className="px-4 md:px-8 lg:px-16 py-16 bg-[#0f0f0f]">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Latest Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              title={blog.title}
              shortDescription={blog.shortDescription}
              cover={blog.cover}
              slug={blog.slug}
              publishDate={blog.publishDate}
              estimatedTimeToRead={blog.estimatedTimeToRead}
              tags={blog.tags}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </main>
  );
}
