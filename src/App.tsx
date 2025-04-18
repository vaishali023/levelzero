import Header from "./components/Header";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Liquidity from "./pages/Liquidity";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <Header/>
      <main className="pt-24 px-4">
        <Routes>
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/liquidity" element={<Liquidity />} />
          <Route path="/" element={<Navigate to="/buy" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
