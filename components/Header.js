import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { Calendar } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noOfGuests, setnoOfGuests] = useState(1);
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const search=()=>{
    router.push({
      pathname:'/search',
      query:{
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests
      }
    })
  }

  const resetSearchInput = () => {
    setSearchInput("");
  };
  return (
    <header className="sticky top-0 z-50  md:grid grid-cols-3 bg-white p-5 md:px-10 shadow-md">
      {/* left div */}
      <div
        onClick={() => router.push("/")}
        className="   relative cursor-pointer  items-center my-auto h-10"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle div */}
      <div className="flex items-center border-2 rounded-full">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder  || "Search Destinations"}
          className="outline-none ml-10  flex-grow bg-gray "
        />
        <SearchIcon className=" hidden md:inline h-8 p-1  bg-red-500  mx-2 text-white rounded-full cursor-pointer" />
      </div>

      {/* Right Section */}
      <div className="hidden md:flex space-x-4 items-center cursor-pointer justify-end">
        <div>
          <p>Become a host</p>
        </div>
        <div>
          <GlobeAltIcon className="h-8  text-gray-500 cursor-pointer" />
        </div>
        <div className="flex border-2 rounded-full p-1">
          <MenuIcon className="h-8  text-gray-500 cursor-pointer" />
          <UserCircleIcon className="h-8  text-gray-500 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5D51"]}
            onChange={handleSelect}
          />
          <div className="flex items-center ">
            <h2 className="text-2xl flex-grow font-semibold"> No of Guests</h2>
            <UserIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              onChange={(e) => setnoOfGuests(e.target.value)}
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button
              onClick={resetSearchInput}
              className="flex-grow font-semibold text-gray-500"
            >
              Cancel
            </button>
            <button onClick={search} className="flex-grow font-semibold text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
