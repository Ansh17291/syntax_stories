"use client";

import { useEffect, useState } from "react";
import BlogCard, { BlogProps } from "@/components/BlogCard";
import SkeletonBlogCard from "@/components/SkeletonBlogCard";
import TagFilter from "@/components/TagFilter";
import SearchBar from "@/components/SearchBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogProps[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
        setFilteredBlogs(data);
        const uniqueTags = [
          "All",
          ...Array.from(new Set<string>(data.flatMap((blog: any) => blog.tags.map((tag: any) => tag.name)))),
        ];
        setTags(uniqueTags);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter((blog) => {
      const matchesTag = selectedTag === "All" || blog.tags?.some((tag: any) => tag.name === selectedTag);
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTag && matchesSearch;
    });
    setFilteredBlogs(filtered);
  }, [selectedTag, searchTerm, blogs]);

  return (
    <section className="min-h-screen px-6 py-10 bg-[#0f0f0f] text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <TagFilter tags={tags} selected={selectedTag} onSelect={setSelectedTag} />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlogCard key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => <BlogCard key={blog.slug} {...blog} />)
          ) : (
            <p className="text-center col-span-full text-gray-400">No blogs found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default BlogPage;
