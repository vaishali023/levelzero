type Props = {
  label: string
  value: string
  onValueChange: (val: string) => void  
  dropdownValue: string
  icon?: string
  onDropdownClick: () => void
}

export default function InputWithDropdown({
  label,
  value,
  onValueChange,
  dropdownValue,
  icon,
  onDropdownClick,
}: Props) {
  return (
    <div className="w-full bg-[#1a1a1a] border border-[#2a2d3a] rounded-xl px-4 py-3">
      <div className="text-sm text-gray-400 mb-1">{label}</div>
      <div className="flex items-center justify-between gap-3">
        <input
          inputMode="decimal"
          type="text"
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder="0.00"
          className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full text-lg font-medium appearance-none"
        />

        <button
          onClick={onDropdownClick}
          className="flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#2a2d3a] hover:border-white/30 rounded-full transition"
        >
          {icon && (
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center bg-gray-800">
              <img
                src={icon}
                alt="flag"
                className="w-[140%] h-[140%] object-cover"
              />
            </div>
          )}
          <span className="text-white text-sm font-medium">{dropdownValue}</span>
          <svg
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
