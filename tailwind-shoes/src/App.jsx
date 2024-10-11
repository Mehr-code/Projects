import { Card } from "./components/Card";
import { Nav } from "./components/Nav";
import { ShoeDatail } from "./components/ShoeDetail";
import { SHOES_LIST } from "./constant";

export function App() {
  return (
    <div className="p-2 xl:px-24 animate-fadeIn">
      {/* <Nav />
      <ShoeDatail /> */}
      <Card item={SHOES_LIST[0]} />
    </div>
  );
}
