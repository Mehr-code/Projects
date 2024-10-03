import Nike1 from "../assets/n1-min.png";
export function ShoeDatail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Img */}
      <div className="flex-1 ">
        <img src={Nike1} alt="" />
      </div>

      {/* Descrition */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="text-5xl font-black md:text-9xl">Nike Air max 270</div>
        {/* Header-desc */}
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient"
          }
        </div>
        {/* Price */}
        <div className="text-3xl font-extrabold md:text-4xl">100 $</div>
        {/* Button */}
        <div className="space-x-10">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
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
