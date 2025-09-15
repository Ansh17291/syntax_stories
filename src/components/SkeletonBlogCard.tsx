export default function SkeletonBlogCard() {
  return (
    <div className="animate-pulse bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 space-y-4">
      <div className="h-40 bg-gray-700 rounded w-full" />
      <div className="h-4 bg-gray-600 rounded w-3/4" />
      <div className="h-3 bg-gray-600 rounded w-full" />
      <div className="h-3 bg-gray-600 rounded w-5/6" />
    </div>
  );
}
