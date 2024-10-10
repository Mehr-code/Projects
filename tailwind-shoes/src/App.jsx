import { Nav } from "./components/Nav";
import { ShoeDatail } from "./components/ShoeDetail";

export function App() {
  return (
    <div className="p-2 xl:px-24 animate-fadeIn">
      <Nav />
      <ShoeDatail />
    </div>
  );
}
