import { Card } from "./Card";
export function NewArrivalsSection({ items }) {
  return (
    <div>
      <div className=" mt-20">
        <div className="flex-center">
          <div className="text-4xl font-extrabold bg-[url('./assets/lines.png')]">
            NEW ARRIVALS
          </div>
        </div>
      </div>
      <div className="justify-between mt-10 grid grid-col-1 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] gap-x-6">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
