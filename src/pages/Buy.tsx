import { useState } from "react";
import BuyForm from "../components/BuyForm";
import SendForm from "../components/SendForm";

export default function Buy() {
  const [activeTab, setActiveTab] = useState<"buy" | "send">("buy");
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <div className="flex bg-[#222] rounded-full mb-6">
        <button
          onClick={() => setActiveTab("buy")}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeTab === "buy"
              ? "bg-white text-black"
              : "text-white hover:text-gray-300"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab("send")}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeTab === "send"
              ? "bg-white text-black"
              : "text-white hover:text-gray-300"
          }`}
        >
          Send
        </button>
      </div>

      <div className="w-full max-w-md">
        {activeTab === "buy" ? <BuyForm /> : <SendForm />}
      </div>
    </div>
  );
}
