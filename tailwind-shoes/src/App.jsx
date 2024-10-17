import { Nav } from "./components/Nav";
import { Sidebar } from "./components/Sidebar";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDatail } from "./components/ShoeDetail";
import { SHOES_LIST } from "./constant";
import { useState } from "react";
import { CardItem } from "./components/CardItem";

export function App() {
  // For Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="px-2 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDatail />
      <NewArrivalsSection items={SHOES_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="text-2xl font-bold mb-10">Cart</h2>
        <CardItem item={SHOES_LIST[0]}></CardItem>
        <CardItem item={SHOES_LIST[1]}></CardItem>
        <CardItem item={SHOES_LIST[2]}></CardItem>
      </Sidebar>
    </div>
  );
}
