import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditVehicle() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [formvalue, setFormvalue] = useState({
    vehicleModel: "",
    vehicleNumber: "",
    vehicleSeats: "",
    vehicleRent: "",
  });
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const vechicleRowData = async () => {
      const getVehicleData = await fetch(
        "http://localhost/api/vehicle.php/" + id
      );
      const resVehicleData = await getVehicleData.json();
      setFormvalue(resVehicleData);
    };
    vechicleRowData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      id: id,
      vehicleModel: formvalue.vehicleModel,
      vehicleNumber: formvalue.vehicleNumber,
      vehicleSeats: formvalue.vehicleSeats,
      vehicleRent: formvalue.vehicleRent,
    };
    const res = await axios.put("http://localhost/api/vehicle.php/", formData);

    if (res.data.success) {
      setMessage(res.data.success);
      setTimeout(() => {
        navigate("/listed-vehicle");
      }, 2000);
    }
  };

  return (
    <>
      <div className="add-vehicle flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="form-child w-[100%] md:w-[500px] border p-10 rounded-lg"
        >
          <h1 className="text-5xl font-semibold">Edit Vehicles</h1>
          <p className="text-red-600">{message}</p>
          <div className="name mt-10 flex flex-col items-start my-4 ">
            <label htmlFor="model">Vehicle Model</label>
            <input
              value={formvalue.vehicleModel}
              onChange={handleInput}
              className="outline-none w-[100%] border-b-2"
              type="text"
              name="vehicleModel"
              id="vehicleModel"
              required
            />
          </div>

          <div className="number flex flex-col items-start my-4">
            <label htmlFor="number"> Vehicle Number</label>
            <input
              value={formvalue.vehicleNumber}
              onChange={handleInput}
              className="outline-none w-[100%] border-b-2"
              type="text"
              name="vehicleNumber"
              id="vehicleNumber"
              required
            />
          </div>
          <div className="seats flex flex-col items-start my-4">
            <label htmlFor="seats">Vehicle no. of Seats</label>
            <input
              value={formvalue.vehicleSeats}
              onChange={handleInput}
              className=" w-[100%] outline-none border-b-2"
              type="number"
              name="vehicleSeats"
              id="vehicleSeats"
              required
            />
          </div>
          <div className="rent-per-day flex flex-col items-start my-4">
            <label htmlFor="rent">Rent Per Day</label>
            <input
              value={formvalue.vehicleRent}
              onChange={handleInput}
              className=" w-[100%] outline-none border-b-2"
              type="number"
              name="vehicleRent"
              id="vehicleRent"
              required
            />
          </div>

          <button
            className="bg-yellow-400 px-8 py-3 rounded-lg mr-2"
            type="submit"
          >
            Edit
          </button>

          <button
            className="border-yellow-400 border-b-2 mx-8 py-1"
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

export default EditVehicle;
