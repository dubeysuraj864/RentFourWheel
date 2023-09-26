import { useEffect, useState } from "react";
import Card from "../components/Card";

function ListedVehicle() {
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
    <>
      <div className="listed-vehicle">
       <h1 className="text-4xl font-bold my-10 text-center"> Listed Vehicle</h1>
        <div className="flex justify-center flex-wrap ">
          {vehicleData &&
            vehicleData.map((item) => {
              return (
                <>
                  <Card
                    key={item.id}
                    model={item.model}
                    number={item.number}
                    seats={item.seats}
                    vehicleRent={item.vehicleRent}
                  />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ListedVehicle;
