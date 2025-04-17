import { ConnectButton } from "@arweave-wallet-kit/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navItems = [
    { name: "Buy", path: "/buy" },
    { name: "Sell", path: "/sell" },
    { name: "Liquidity", path: "/liquidity" },
  ];

  return (
    <header className="fixed top-0 w-full text-white bg-[#111] flex items-center justify-between z-50 px-6 py-4">
      <div className="flex items-center gap-10">
        <h1 className="text-xl font-bold tracking-tight">levelzero</h1>
        <nav className="flex gap-4">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({isActive}) =>
                `capitalize text-sm font-medium transition duration-150 ${
                  isActive
                    ? "text-white underline underline-offset-4"
                    : "text-gray-400 hover:text-white no-underline "
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>
        <button className="">...</button>
      </div>
      <ConnectButton
        accent="rgb(171 154 255)"
        profileModal={false}
        showBalance={true}
        className="rounded-lg px-4 py-2 font-medium"
      />
    </header>
  );
}
