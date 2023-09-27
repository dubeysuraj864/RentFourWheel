import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AgencyRegistration() {
  const [agencyName, setAgencyName] = useState("");
  const [agencyEmail, setAgencyEmail] = useState("");
  const [agencyPassword, setAgencyPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const agencyData = {
      agencyName: agencyName,
      agencyEmail: agencyEmail,
      agencyPassword: agencyPassword,
    };

    const result = await axios.post(
      "http://localhost/api/agency.php",
      agencyData
    );
    console.log(result.data);
    setTimeout(() => {
      navigate("/agency-login");
    }, 2000);
  };

  return (
    <>
      <div className="registration h-[80vh] flex justify-around items-center">
        {/* <div className="left w-[100%] md:w-[500px]">
          <div className="os-left w-[100%] md:w-[500px] h-[40vh] relative flex justify-center items-center ">
            <div className="shape2 rotate-45 absolute -z-20 md:left-[40%] left-[0%] top-[20%] bg-[#F1BC00] w-[500px] h-[400px] md:w-[300px] md:h-[300px]"></div>

            <div className="shape1 absolute md:left-[0%] right-[0%] top-[15%] -z-10 bg-[rgba(63,63,63,0.33)]  w-[500px] h-[400px] md:w-[300px] md:h-[300px] "></div>

            <img
              className="md:w-[900px] overflow-hidden  w-[500px] mt-[100px] z-30 "
              src={RedCar}
              alt="OurServiceCar"
            />
          </div>
        </div> */}
        <div className="form w-[100%] md:w-[500px] flex justify-center ">
          <form
            onSubmit={handleSubmit}
            className="form-child w-[100%] md:w-[500px] border p-10 rounded-lg"
          >
            <h1 className="text-5xl font-semibold">Agency Sign Up</h1>
            <h4 className="mt-4">
              Let's get started with your 30 days free trial
            </h4>

            <div className="name mt-10 flex flex-col items-start my-4 ">
              <label htmlFor="name">Name</label>
              <input
                value={agencyName}
                onChange={(e) => {
                  setAgencyName(e.target.value);
                }}
                className="outline-none w-[100%] border-b-2"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>

            <div className="email flex flex-col items-start my-4">
              <label htmlFor="email">Email</label>
              <input
                value={agencyEmail}
                onChange={(e) => {
                  setAgencyEmail(e.target.value);
                }}
                className="outline-none w-[100%] border-b-2"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="password flex flex-col items-start my-4">
              <label htmlFor="password">Password</label>
              <input
                value={agencyPassword}
                onChange={(e) => setAgencyPassword(e.target.value)}
                className=" w-[100%] outline-none border-b-2"
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <button
              className="bg-yellow-400 px-8 py-3 rounded-lg mr-2"
              type="submit"
            >
              Create Account
            </button>
            <Link to="/register">
              {" "}
              <button
                className="border-yellow-400 border-b-2 mx-8 py-1"
                type="submit"
              >
                {" "}
                Are you a customer?
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default AgencyRegistration;
