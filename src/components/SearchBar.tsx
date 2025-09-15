type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search blog title..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-72 px-4 py-2 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
    />
  );
}
