import Car1 from "../images/car1.png";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

function Card(props) {
  return (
    <>
      <div key={props.id} className="card w-[300px] md:my-10 h-[420px] overflow-hidden relative mx-4 my-4 cursor-pointer transition-all card-shadow bg-gray-100 rounded-xl drop-shadow-xl">
        <div className="top w-[300px] h-[250px]">
          <img src={Car1} className="p-4 w-[300px] absolute" alt="vehicle" />
        </div>
        <div className="bottom bg-yellow-300 rounded-t-3xl p-6 ">
          <div className="vehicle-model font-bold text-2xl text-left">
            {props.model}
          </div>
          <div className="flex justify-start mt-3">
            {" "}
            <div className="vehicle-number font-semibold mr-4 ">{props.number}</div>
            <div className="flex items-center justify-center">
              <MdAirlineSeatReclineExtra className="mr-1" />
              <span className="vehicle-seats">{props.seats}</span>
            </div>
          </div>
          <div className="flex items-center justify-start mt-1">
            {" "}
            <div className="vehicle-rent mt-2 font-bold text-2xl mr-4">${props.vehicleRent}</div>
            <button className="bg-[#21408E] mt-4  px-10 py-2 rounded-lg text-white from-bold">
              {" "}
              Rent
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
