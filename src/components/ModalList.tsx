import { useEffect, useRef, useState } from "react"

type ModalListProps<T extends { [key: string]: any }> = {
  title: string
  searchPlaceholder?: string
  options: T[]
  displayKey: keyof T
  iconKey?: keyof T
  onClose: () => void
  onSelect: (option: T) => void
  filterKey?: keyof T
}

export default function ModalList<T extends { [key: string]: any }>({
  title,
  searchPlaceholder,
  options,
  displayKey,
  iconKey,
  onClose,
  onSelect,
  filterKey,
}: ModalListProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (searchPlaceholder) {
      inputRef.current?.focus()
    }
  }, [searchPlaceholder])

  const filtered = !searchPlaceholder
    ? options
    : options.filter((option) => {
        const code = String(option["code"] || "").toLowerCase()
        const name = String(option["name"] || "").toLowerCase()
        return code.includes(search.toLowerCase()) || name.includes(search.toLowerCase())
      })

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#0f0f0f] p-6 rounded-xl w-full max-w-sm text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">
            ×
          </button>
        </div>

        {searchPlaceholder && (
          <input
            ref={inputRef}
            type="text"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded bg-[#1a1a1a] mb-4 border border-gray-700"
          />
        )}

        <div className="space-y-2 max-h-80 overflow-y-auto">
          {filtered.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(option)}
              className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-[#1a1a1a] rounded"
            >
              {/* 🌐 Use emoji for platforms */}
              {iconKey && (
                typeof option[iconKey] === "string" && option[iconKey]?.startsWith("http") ? (
                  <img
                    src={option[iconKey]}
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                ) : (
                  <span className="text-lg">🌐</span>
                )
              )}
              <div>
                <div className="font-medium text-white">{String(option[displayKey])}</div>
                {"supported" in option && (
                  <div className="text-sm text-gray-400">{option["supported"]}</div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
