export default function BuyForm() {
  return (
    <div className="bg-[#0d0f1a] text-white rounded-xl p-6 shadow-md space-y-4">
      <div className="flex justify-between">
        <span>You send</span>
        <span>CAD ▼</span>
      </div>
      <div className="flex justify-between">
        <span>Paying using</span>
        <span>Revolut ▼</span>
      </div>
      <div className="flex justify-between">
        <span>You receive</span>
        <span>USDC ▼</span>
      </div>
      <button className="w-full mt-4 bg-[#AB9AFF] hover:bg-red-600 text-white rounded-lg py-2 font-medium">
        Log In
      </button>
    </div>
  );
}
