import TokenSelector from "../components/TokenSelector"
import { Token } from "../hooks/useTokens"

type Props = {
  onSelect: (token: Token) => void
  onClose: () => void
}

export default function TokenListModal({ onSelect, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-[#0f0f0f] p-6 rounded-xl w-full max-w-sm text-white shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Select Token</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">×</button>
        </div>
        <TokenSelector onSelect={onSelect} />
      </div>
    </div>
  )
}
