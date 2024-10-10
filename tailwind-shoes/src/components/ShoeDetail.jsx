import Nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constant";
import { Select } from "./Select";
export function ShoeDatail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Shoe Image */}
      <div className=" flex-1 lg:-mt-24 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#f637cf] from-5% via-[#e3d876] via-40% to-[#4dd4c6]">
          <img src={Nike1} alt="" className="animate-float" />
        </div>
      </div>

      {/* Shoe text details */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="text-5xl font-black md:text-9xl">Nike Air max 270</div>
        {/* Header-desc */}
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient"
          }
        </div>

        {/* options & price */}
        <div className="flex space-x-6">
          {/* Price */}
          <div className="text-3xl font-extrabold md:text-4xl">100 $</div>

          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>

        {/* Button */}
        <div className="space-x-10">
          <button className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 ">
            Add to bag
          </button>
          {/* Link */}
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
