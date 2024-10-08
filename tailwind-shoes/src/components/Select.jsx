import { IoIosArrowDown } from "react-icons/io";

export function Select({ title, options }) {
  return (
    <div className="relative">
      <select
        name=""
        id=""
        defaultValue={""}
        className="w-24 appearance-none border border-gray-300 p-4"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex-center ">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
