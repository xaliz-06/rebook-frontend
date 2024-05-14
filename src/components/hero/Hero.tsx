import books_hero from "../../assets/books.png";

const Hero = () => {
  return (
    <div className="flex justify-evenly p-3 px-16 bg-slate-800 h-[100%] items-center md:h-[100%] lg:h-[80vh]">
      <div className="flex-1 flex flex-col p-8 px-2 md:p-8 gap-5 text-gray-200 text-center md:text-left">
        <h3 className="text-6xl font-bold leading-normal">
          Buy
          <br />
          Sell
          <br />
          <span className="text-blue-800">Repeat.</span>
        </h3>
        <p className="md:text-2xl text-lg font-semibold">
          Your Premier Destination for Buying and Selling Used Books
        </p>
        <p className="text-sm md:text-lg">
          Browse through our extensive collection of used books spanning a
          myriad of genres, from timeless classics to contemporary bestsellers.
          Uncover hidden gems and rare finds, all waiting to be discovered by
          eager readers like you.
        </p>
      </div>
      <div className="hidden md:flex md:flex-1  justify-center items-center">
        <img src={books_hero} alt="books hero" className="w-[500px]" />
      </div>
    </div>
  );
};

export default Hero;
