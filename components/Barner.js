import Image from "next/image";

const Barner = () => {
  return (
    <div className="relative h-[400px] md:h-[450px] sm:h-[500px] lg:h-[550px] xl:h-[559px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute top-1/2 w-full text-center ">
        <p> Not Sure where to go?</p>
        <button
          className="text-purple-600 px-10 py-4 font-bold my-2.5 bg-white rounded-full shadow-md hover:shadow-xl
                 active:scale-90 transition duration-100
                 "
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Barner;
