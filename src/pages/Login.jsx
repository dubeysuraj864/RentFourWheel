import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      customerName: customerName,
      customerEmail: customerEmail,
      customerPassword: customerPassword,
    };

    const result = await fetch("https://rent4wheel.000webhostapp.com/customers.php", formData);
    const data = await result.json();

    console.log(data);

    const userData = data[0];

    if (
      userData.customerName === customerName &&
      userData.customerEmail === customerEmail &&
      userData.customerPassword === customerPassword
    ) {
      navigate("/");
    } else {
      alert("Please register yourself first...");
    }

    const auth = localStorage.setItem("customer", JSON.stringify(formData));
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
            <h1 className="text-5xl font-semibold">Customer Login</h1>
            <h4 className="mt-4">
              Let's get started with your 30 days free trial
            </h4>

            <div className="name mt-10 flex flex-col items-start my-4 ">
              <label htmlFor="name">Name</label>
              <input
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
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
                value={customerEmail}
                onChange={(e) => {
                  setCustomerEmail(e.target.value);
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
                value={customerPassword}
                onChange={(e) => {
                  setCustomerPassword(e.target.value);
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
              to="/agency-login"
              className="border-yellow-400 border-b-2 mx-8 py-1"
            >
              {" "}
              Car Rental Agency?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
