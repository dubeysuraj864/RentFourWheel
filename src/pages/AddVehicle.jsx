import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddVehicle() {
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleSeats, setVehicleSeats] = useState("");
  const [vehicleRent, setVehicleRent] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      vehicleModel: vehicleModel,
      vehicleNumber: vehicleNumber,
      vehicleSeats: vehicleSeats,
      vehicleRent: vehicleRent,
    };

    const res = await axios.post("http://localhost/api/vehicle.php", formData);
    console.log(res);
    setTimeout(() => {
      setMsg(" Vehicle added successfully");
      navigate("/listed-vehicle");
    }, 2000);
  };

  return (
    <>
      <div className="add-vehicle flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="form-child w-[100%] md:w-[500px] border p-10 rounded-lg"
        >
          <h1 className="md:text-5xl text-4xl font-semibold">Add New Vehicles</h1>
          <p className="text-red-600">{msg}</p>
          <div className="name mt-10 flex flex-col items-start my-4 ">
            <label htmlFor="model">Vehicle Model</label>
            <input
              value={vehicleModel}
              onChange={(e) => {
                setVehicleModel(e.target.value);
              }}
              className="outline-none w-[100%] border-b-2"
              type="text"
              name="model"
              id="model"
              required
            />
          </div>

          <div className="number flex flex-col items-start my-4">
            <label htmlFor="number"> Vehicle Number</label>
            <input
              value={vehicleNumber}
              onChange={(e) => {
                setVehicleNumber(e.target.value);
              }}
              className="outline-none w-[100%] border-b-2"
              type="text"
              name="number"
              id="number"
              required
            />
          </div>
          <div className="seats flex flex-col items-start my-4">
            <label htmlFor="seats">Vehicle no. of Seats</label>
            <input
              value={vehicleSeats}
              onChange={(e) => {
                setVehicleSeats(e.target.value);
              }}
              className=" w-[100%] outline-none border-b-2"
              type="number"
              name="seats"
              id="seats"
              required
            />
          </div>
          <div className="rent-per-day flex flex-col items-start my-4">
            <label htmlFor="rent">Rent Per Day</label>
            <input
              value={vehicleRent}
              onChange={(e) => {
                setVehicleRent(e.target.value);
              }}
              className=" w-[100%] outline-none border-b-2"
              type="number"
              name="rent"
              id="rent"
              required
            />
          </div>

          <button
            className="bg-yellow-400 px-8 py-3 rounded-lg mr-2"
            type="submit"
          >
            Add
          </button>

          <button
            className="border-yellow-400 border-b-2 md:mx-8 py-1"
            type="submit"
          >
            {" "}
            <Link to="/listed-vehicle"> View All Added Vehicles</Link>
          </button>
        </form>
      </div>
    </>
  );
}

export default AddVehicle;
