import { useEffect, useState } from "react";
import DropdownRow from "./DropdownRow";
import InputWithDropdown from "./InputWithDropdownRow";
import ModalList from "./ModalList";
import { currencyList } from "../data/currencies";
import { platformList } from "../data/platforms";
import TokenListModal from "../modals/TokenListModal";
import { Token } from "../data/tokens";
const getWalletAddress = async (): Promise<string | null> => {
  try {
    const address = await window.arweaveWallet.getActiveAddress()
    return address
  } catch {
    return null
  }
}


type Currency = {
  code: string
  name: string
  flag?: string
}

export default function BuyForm() {
  const [modalType, setModalType] = useState<"currency" | "token" | "platform" | null>(null)
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null)
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>("Revolut")
  const [amountSend, setAmountSend] = useState<string>("")
  const [amountReceive, setAmountReceive] = useState<string>("")
  const [showRecipientInput, setShowRecipientInput] = useState(false)
  const [recipient, setRecipient] = useState("")
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  useEffect(() => {
    setSelectedCurrency({
      code: "CAD",
      name: "Canadian Dollar",
      flag: "https://flagcdn.com/w40/ca.png",
    })
    getWalletAddress().then(setWalletAddress)
  }, [])

  const isFormValid =
    selectedCurrency &&
    selectedToken &&
    amountSend.trim() !== "" &&
    (!showRecipientInput || recipient.trim() !== "")

  const handleLogin = () => {
    if (!walletAddress) {
      alert("Please connect your wallet to continue.")
      return
    }
    if (!isFormValid) {
      alert("Please fill out all required fields.")
      return
    }
  }

  return (
    <div className="w-full max-w-md space-y-4 bg-[#0d0f1a] p-6 rounded-xl shadow-md">
      <InputWithDropdown
        label="You send"
        value={amountSend}
        onValueChange={setAmountSend}
        dropdownValue={selectedCurrency?.code ?? "Select"}
        icon={selectedCurrency?.flag}
        onDropdownClick={() => setModalType("currency")}
      />

      <DropdownRow
        label="Paying using"
        value={selectedPlatform}
        onClick={() => setModalType("platform")}
      />

      <InputWithDropdown
        label="You receive"
        value={amountReceive}
        onValueChange={setAmountReceive}
        dropdownValue={selectedToken?.symbol ?? "Select"}
        icon={selectedToken?.logoURI}
        onDropdownClick={() => setModalType("token")}
      />

      <button
        onClick={() => setShowRecipientInput((prev) => !prev)}
        className="text-sm flex items-center gap-1 text-white hover:text-gray-300 px-4 py-2 border border-gray-600 rounded-full"
      >
        {showRecipientInput ? "- Add Custom Recipient" : "+ Add Custom Recipient"}
      </button>

      {showRecipientInput && (
        <input
          type="text"
          placeholder="Wallet address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full bg-[#1a1a1a] border border-[#2a2d3a] text-white px-4 py-3 rounded-xl placeholder:text-gray-400 mt-2"
        />
      )}

      <button
        type="button"
        onClick={handleLogin}
        className="w-full bg-[#AB9AFF] text-white rounded-xl py-3 font-medium mt-2"
      >
        Log In
      </button>

      {modalType === "currency" && (
        <ModalList
          title="Select a Currency"
          searchPlaceholder="Search currency"
          options={currencyList}
          displayKey="code"
          iconKey="flag"
          onClose={() => setModalType(null)}
          onSelect={(currency) => {
            setSelectedCurrency(currency)
            setModalType(null)
          }}
        />
      )}

      {modalType === "platform" && (
        <ModalList
          title="Select a platform"
          options={platformList}
          displayKey="label"
          iconKey="icon"
          onClose={() => setModalType(null)}
          onSelect={(p) => {
            setSelectedPlatform(p.label)
            setModalType(null)
          }}
        />
      )}

{modalType === "token" && (
        <TokenListModal
          onClose={() => setModalType(null)}
          onSelect={(token) => {
            setSelectedToken(token)
            setModalType(null)
          }}
        />
      )}
    </div>
  )
}
