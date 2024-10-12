import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDatail } from "./components/ShoeDetail";
import { SHOES_LIST } from "./constant";

export function App() {
  return (
    <div className="px-2 xl:px-24 animate-fadeIn">
      <Nav />
      <ShoeDatail />
      <NewArrivalsSection items={SHOES_LIST} />
    </div>
  );
}
