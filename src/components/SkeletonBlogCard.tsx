"use client";

export default function SkeletonBlogCard() {
  return (
    <div className="animate-pulse bg-[#1a1a1a] border border-gray-800 rounded-xl overflow-hidden w-full max-w-sm sm:max-w-md mx-auto">
      {/* Image placeholder */}
      <div className="h-48 bg-gray-700 w-full rounded-t-xl" />

      {/* Content placeholder */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <div className="h-6 bg-gray-600 rounded w-3/4"></div>

        {/* Short description */}
        <div className="h-4 bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-600 rounded w-5/6"></div>

        {/* Publish date & reading time */}
        <div className="flex justify-between">
          <div className="h-3 bg-gray-600 rounded w-1/4"></div>
          <div className="h-3 bg-gray-600 rounded w-1/6"></div>
        </div>

        {/* Read More placeholder */}
        <div className="h-4 bg-gray-600 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );
}
