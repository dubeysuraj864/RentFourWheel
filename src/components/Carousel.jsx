import Card from "./Card";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Carousel() {
  const [vehicleData, setVehicleData] = useState();
  useEffect(() => {
    const getVehicleData = async () => {
      const data = await fetch("http://localhost/api/vehicle.php");
      const result = await data.json();
      console.log(result);
      setVehicleData(result);
    };
    getVehicleData();
  }, []);
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 300;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 300;
  };
  return (
    <>
      <div className="carousel text-center py-20 relative">
        <h2 className="font-bold text-3xl">We Have Everything You Need</h2>
        <div className="buttons">
          <button
            onClick={scrollLeft}
            className="left bg-[#21408E] p-3 rounded-full text-white absolute bottom-0 left-[50%] md:left-[43%]"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="right bg-[#21408E] p-3 rounded-full text-white absolute bottom-0 left-[60%] md:left-[46%]"
          >
            <FaAngleRight />
          </button>

          <Link
            to="/cards"
            className="right bg-[#21408E] p-3 rounded-full text-white absolute bottom-0 left-[0%] mt-2 px-10 md:left-[51%]"
          >
            Wanna View All?
          </Link>
        </div>
        <div
          id="content"
          className="flex justify-start items-center  overflow-auto transition-all scroll-smooth"
        >
          <div className="flex justify-start items-center">
            {vehicleData &&
              vehicleData.map((item) => {
                return (
                  <Link to={`/book-now/${item.id}`}>
                    <Card
                      key={item.id}
                      model={item.model}
                      number={item.number}
                      seats={item.seats}
                      vehicleRent={item.vehicleRent}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
