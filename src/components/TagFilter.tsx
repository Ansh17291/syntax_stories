type Props = {
  tags: string[];
  selected: string;
  onSelect: (tag: string) => void;
};

export default function TagFilter({ tags, selected, onSelect }: Props) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag) => (
        <button
          key={tag}
          className={`px-3 py-1 rounded-full border ${
            selected === tag
              ? "bg-blue-500 text-white"
              : "bg-[#1a1a1a] text-gray-300 hover:border-blue-400"
          } transition-all text-sm`}
          onClick={() => onSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
