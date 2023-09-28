import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {SiAudi,SiMercedes,SiBmw,SiTesla,SiFerrari} from "react-icons/si"

function AllCards() {
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
  return (
    <div>
        <div className="our-luxury">
            <h2 className="text-center my-10 text-5xl font-bold">Our Luxury Brand</h2>
            <div className="brands flex justify-center items-center">
                <span className="flex justify-center items-center m-2 bg-gray-300 p-3 w-40 rounded-xl text-2xl "><SiAudi className="text-3xl mr-2"/> Audi</span>
                <span className="flex justify-center items-center m-2 bg-gray-300 p-3 w-40 rounded-xl text-2xl "><SiMercedes className="text-3xl mr-2"/>Mercedes</span>
                <span className="flex justify-center items-center m-2 bg-gray-300 p-3 w-40 rounded-xl text-2xl "><SiBmw className="text-3xl mr-2"/>BMW</span>
                <span className="flex justify-center items-center m-2 bg-gray-300 p-3 w-40 rounded-xl text-2xl "><SiTesla className="text-3xl mr-2"/> Tesla</span>
                <span className="flex justify-center items-center m-2 bg-gray-300 p-3 w-40 rounded-xl text-2xl "><SiFerrari className="text-3xl mr-2"/>Ferrari</span>
            </div>
        </div>
      <div className="div all-cards flex flex-wrap justify-center">
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
  );
}

export default AllCards;
