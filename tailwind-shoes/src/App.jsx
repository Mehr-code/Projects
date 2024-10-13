import { Nav } from "./components/Nav";
import { Sidebar } from "./components/Sidebar";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDatail } from "./components/ShoeDetail";
import { SHOES_LIST } from "./constant";
import { useState } from "react";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="px-2 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDatail />
      <NewArrivalsSection items={SHOES_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
