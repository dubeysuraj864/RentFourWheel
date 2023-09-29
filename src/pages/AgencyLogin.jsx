import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function AgencyLogin() {
  const [agencyName, setAgencyName] = useState("");
  const [agencyEmail, setAgencyEmail] = useState("");
  const [agencyPassword, setAgencyPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      agencyName: agencyName,
      agencyEmail: agencyEmail,
      agencyPassword: agencyPassword,
    };

    const result = await fetch(
      "https://rent4wheel.000webhostapp.com/agency.php",
      formData
    );
    const data = await result.json();

    const userData = data[0];

    if (
      userData.agencyName === agencyName &&
      userData.agencyEmail === agencyEmail &&
      userData.agencyPassword === agencyPassword
    ) {
      navigate("/add-vehicle");
    } else {
      alert("Please register yourself first...");
    }

    const auth = localStorage.setItem("agency", JSON.stringify(formData));
    if (auth) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <>
      <div className="login flex justify-center items-center h-[80vh]">
        <div className="form w-[100%] md:w-[500px] flex justify-center ">
          <form
            onSubmit={handleSubmit}
            className="form-child w-[100%] md:w-[500px] border p-10 rounded-lg"
          >
            <h1 className="text-5xl font-semibold">Agency Login</h1>
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
                name="customerName"
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
                onChange={(e) => {
                  setAgencyPassword(e.target.value);
                }}
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
              Login
            </button>
            <Link
              to="/login"
              className="border-yellow-400 border-b-2 mx-8 py-1"
            >
              {" "}
              Are you a customer?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default AgencyLogin;
