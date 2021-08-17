import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

import Image from "next/image";

const StaysCard = ({
  img,
  location,
  description,
  star,
  price,
  total,
  title,
}) => {
  return (
    <div className="flex first:border-t px-2 py-5 shrink-0 cursor-pointer   hover:opacity-80">
      <div className="relative  w-80 h-52 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="ml-8 flex flex-grow flex-col">
        <div className="flex justify-between">
          <p className>{location}</p>
          <HeartIcon className="h-7 text-gray-400 " />
        </div>
        <p className="text-xl font-400 ">{title}</p>
        <div className="border-b pt-2 w-10"> </div>
        <p className="pt-2 text-sm  flex-grow text-gray-500">{description}</p>

        <div className="flex items-center">
          <div className="flex-grow">
            <p className="flex">
              <StarIcon className="text-red-400 h-7" />
              {star}(125 reviews)
            </p>
          </div>
          <div className="">
            <p className="font-semibold flex-grow">{price}</p>
            <p className="underline text-gray-400 flex-grow">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaysCard;
