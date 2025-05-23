type Props = {
  label: string
  value: string | null
  icon?: string
  onClick: () => void
}

export default function DropdownRow({ label, value, icon, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full bg-[#1a1a1a] border border-[#2a2d3a] hover:border-white/30 text-white rounded-xl px-4 py-4 transition"
    >
      <span className="text-sm text-gray-400">{label}</span>
      <div className="flex items-center gap-2">
        {icon && (
          <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
            <img
              src={icon}
              alt="flag"
              className="w-[140%] h-[140%] object-cover"
            />
          </div>
        )}
        <span className="text-white font-medium">{value || "Select"}</span>
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
  )
}
