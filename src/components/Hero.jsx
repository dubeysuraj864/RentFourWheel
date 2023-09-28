import HeroImg from "../images/hero-image.png";

function Hero() {
  return (
    <>
      <div className="hero relative">
        <img
          src={HeroImg}
          className="w-[100%] brightness-[70%] md:brightness-[50%] h-[60vh] object-cover"
          alt="heroImage"
        />
        <div className="hero-heading absolute z-10 ml-4 right-5 top-[40%] text-white">
          <h1 className="font-bold text-5xl md:min-w-[100px] md:max-w-[400px]">
            Safer, faster and comfortable
          </h1>
          <h2 className="font-light text-xl mt-4">
            Rent out our luxury cars.
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer my-4">
            Contact Us Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
