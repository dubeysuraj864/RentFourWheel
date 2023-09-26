import Card from "./Card";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";
import {Link} from "react-router-dom";

function Carousel() {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 300;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 300;
  };
  return (
    <>
      <div className="carousel text-center my-20 relative">
        <h2 className="font-bold text-3xl">We Have Everything You Need</h2>
        <div
          id="content"
          className="flex justify-start items-center  overflow-auto transition-all scroll-smooth">
          <div className="buttons">
            <button
              onClick={scrollLeft}
              className="left bg-[#21408E] p-3 rounded-full text-white absolute bottom-0 left-[38%] md:left-[43%]">
              <FaChevronLeft />
            </button>
            <button
              onClick={scrollRight}
              className="right bg-[#21408E] p-3 rounded-full text-white absolute bottom-0 left-[50%] md:left-[46%]">
              <FaAngleRight />
            </button>
           
            <Link to="/cards" className="right bg-[#21408E] p-3 rounded-full text-white absolute bottom-0 left-[50%] mt-2 px-10 md:left-[51%]">
              Wanna View All?</Link>
 
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>

          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
