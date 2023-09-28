import { useEffect, useState } from "react";
import Card from "../components/Card";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

function ListedVehicle() {
  const [vehicleData, setVehicleData] = useState();

  useEffect(() => {
    getVehicleData();
  }, []);

  const getVehicleData = async () => {
    const data = await fetch("https://rent4wheel.000webhostapp.com/vehicle.php");
    const result = await data.json();
    setVehicleData(result);
  };

  const handleDelete = async (id) => {
    await axios.delete("https://rent4wheel.000webhostapp.com/vehicle.php/" + id);
    getVehicleData();
  };
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-vehicle/${id}`);
  };

  return (
    <>
      <div className="listed-vehicle relative">
       <Link to="/add-vehicle"> <span className="bg-red-500 z-20 rounded-md fixed right-[10px] bottom-[100px] flex justify-around items-center w-max cursor-pointer drop-shadow-xl hover:drop-shadow-[0px]  px-2 py-2 transition-all text-white text-2xl ">
          <MdAddCircle className="text-2xl mr-2" /> Add More
        </span></Link>
        <h1 className="text-4xl font-bold my-10 text-center">
          {" "}
          Listed Vehicle
        </h1>
        <div className="flex justify-center flex-wrap ">
          {vehicleData &&
           vehicleData.map((item) => {
              return (
                <div key={item.id} className="relative">
                  <AiFillDelete
                    onClick={() => handleDelete(item.id)}
                    className="absolute text-3xl cursor-pointer right-[30px] text-white bg-red-500 p-2 rounded-full top-[50px] z-10"
                  />
                  <AiFillEdit
                    onClick={() => handleEdit(item.id)}
                    className="absolute text-3xl cursor-pointer right-[30px] text-black bg-white p-2 rounded-full top-[300px] z-10"
                  />

                  <Card
                    model={item.model}
                    number={item.number}
                    seats={item.seats}
                    vehicleRent={item.vehicleRent}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ListedVehicle;
