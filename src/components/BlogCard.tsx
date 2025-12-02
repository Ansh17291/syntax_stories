"use client";
import { formatDate } from "@/utils/FormatDate";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type BlogProps = {
  tags?: string[]; // optional tags
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
    <div className="group relative mx-auto w-full max-w-sm sm:max-w-md overflow-hidden rounded-xl border border-gray-800 bg-[#121212] shadow-lg transition-transform hover:scale-[1.03] hover:border-red-400 cursor-pointer">
      {/* Cover Image */}
      <figure className="relative h-48 w-full overflow-hidden">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </figure>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        {/* Optional tags */}
        {/* <div className="flex flex-wrap gap-2">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-red-500 text-white px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div> */}

        <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-400">{shortDescription}</p>

        <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 pt-2">
          <span>{formatDate(publishDate)}</span>
          <span>{estimatedTimeToRead}</span>
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-blue-400 hover:underline mt-2 text-sm sm:text-base"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
