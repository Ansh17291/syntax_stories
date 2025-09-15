// components/BlogCard.tsx

"use client";
import { formatDate } from "@/utils/FormatDate";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type BlogProps = {
  tags: any;
  title: string;
  shortDescription: string;
  cover: string;
  slug: string;
  publishDate: string;
  estimatedTimeToRead: string;
};

const BlogCard = ({
  title,
  shortDescription,
  cover,
  slug,
  publishDate,
  estimatedTimeToRead,
}: BlogProps) => {
  return (
    <div className="group relative mx-auto w-full max-w-[400px] overflow-hidden rounded-xl border border-gray-800 bg-[#121212] transition-transform hover:scale-[1.02] hover:border-red-400 cursor-pointer">
      {/* Cover Image */}
      <figure className="relative h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={cover}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </figure>

      {/* Card Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400">{shortDescription}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 pt-2">
          <span>{formatDate(publishDate)}</span>
          <span>{estimatedTimeToRead}</span>
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-blue-400 hover:underline mt-2 text-sm"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
