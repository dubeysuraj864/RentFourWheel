import OurServiceCar from "../images/ourservice-image.png";
function OurService() {
  return (
    <>
      <div className="our-service w-full p-5 md:m-10 min-h-[80vh] md:min-h-[50vh] md:h-[50vh] flex  flex-col md:flex-row justify-between items-center ">
        {/* --left */}
        <div className="os-left w-[100%] md:w-[50%] relative ">
          <div className="shape2 rotate-45 absolute -z-20 md:left-[40%] left-[0%] top-[20%] bg-[#F1BC00] w-[500px] h-[400px] md:w-[300px] md:h-[300px]"></div>

          <div className="shape1 absolute md:left-[0%] right-[0%] top-[15%] -z-10 bg-[rgba(255,255,255,0.33)]  w-[500px] h-[400px] md:w-[300px] md:h-[300px] "></div>

          <img
            className="md:w-[600px] w-[500p] mt-[100px] z-30 "
            src={OurServiceCar}
            alt="OurServiceCar"
          />
        </div>
        {/* ---left */}
        {/* ----right */}
        <div className="os-right md:w-[50%]">
          <div className="flex flex-col justify-center items-start gap-6">
            <h1 className="text-3xl font-semibold text-blue-700">
              Our Services
            </h1>
            {/* --- */}
            <div className=" flex  items-start">
              <div className="shape2 bg-[#F1BC00] w-[50px] h-[50px] mr-4"></div>
              <div className=" flex flex-col items-start">
                <span className="font-semibold">Car Hire</span>{" "}
                <span className="text-gray-500 font-light">
                  We pride ourselves in always going the extra mile for our
                  customers.
                </span>
              </div>
            </div>
            {/* ----- */}
            {/* --- */}
            <div className=" flex  items-start">
              <div className="shape2 bg-[#F1BC00] w-[50px] h-[50px] mr-4"></div>
              <div className=" flex flex-col items-start">
                <span className="font-semibold"> Car Sales</span>{" "}
                <span className="text-gray-500 font-light">
                  we sale the best luxury cars across the world at a competitive
                  price.
                </span>
              </div>
            </div>
            {/* ----- */}
            {/* --- */}
            <div className=" flex  items-start">
              <div className="shape2 bg-[#F1BC00] w-[50px] h-[50px] mr-4"></div>
              <div className=" flex flex-col items-start">
                <span className="font-semibold">Hire a driver</span>{" "}
                <span className="text-gray-500 font-light">
                  you want to travel and fell confortable , our drivers are
                  available.
                </span>
              </div>
            </div>
          </div>
          {/* right---- */}
        </div>
      </div>
    </>
  );
}

export default OurService;
