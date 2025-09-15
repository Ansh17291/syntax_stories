import Link from "next/link";
import { BlogProps } from "./BlogCard";

export default function Footer({ blogs }: { blogs: BlogProps[] }) {
  const latest = blogs.slice(0, 3); // or sort by date
  const tags = Array.from(new Set(blogs.flatMap(b => b.tags.map((t: { name: any; }) => t.name))));

  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800 mt-20 px-6 py-10 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div>
        <h3 className="text-2xl font-bold text-gradient mb-4">Latest Posts</h3>
        {latest.map(blog => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
            <p className="text-gray-300 hover:text-white mb-2">{blog.title}</p>
          </Link>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gradient mb-4">Explore Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="border border-pink-600 text-sm px-3 py-1 rounded-full text-pink-400 hover:bg-pink-600 hover:text-black transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
