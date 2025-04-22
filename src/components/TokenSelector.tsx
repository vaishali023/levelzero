import { useState } from "react"
import { Token, useTokens } from "../hooks/useTokens"

type Props = {
  onSelect: (token: Token) => void
}

export default function TokenSelector({ onSelect }: Props) {
  const { tokens, loading } = useTokens()
  const [search, setSearch] = useState("")

  const filtered = tokens.filter(token =>
    token.symbol.toLowerCase().includes(search.toLowerCase()) ||
    token.name.toLowerCase().includes(search.toLowerCase()) ||
    token.address.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-4">
      <input
        className="w-full p-2 mb-4 rounded bg-[#1a1a1a] text-white border border-gray-700"
        placeholder="Search for a token or paste address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <div className="text-gray-400 text-sm">Loading tokens...</div>
      ) : (
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {filtered.map((token) => (
            <button
              key={token.address}
              onClick={() => onSelect(token)}
              className="flex items-center gap-3 w-full text-left p-2 hover:bg-[#1a1a1a] rounded"
            >
              <img src={token.logoURI} alt={token.symbol} className="w-5 h-5 rounded-full" />
              <div>
                <div className="text-white font-medium">{token.symbol}</div>
                <div className="text-xs text-gray-400 truncate">{token.address}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
