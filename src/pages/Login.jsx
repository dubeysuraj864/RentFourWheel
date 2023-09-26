import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login flex justify-center items-center h-[80vh]">
      <div className="form w-[100%] md:w-[500px] flex justify-center ">
          <form className="form-child w-[100%] md:w-[500px] border p-10 rounded-lg">
            <h1 className="text-5xl font-semibold">Customer Login</h1>
            <h4 className="mt-4">
              Let's get started with your 30 days free trial
            </h4>

            <div className="name mt-10 flex flex-col items-start my-4 ">
              <label htmlFor="name">Name</label>
              <input
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
              <Link to="/add-vehicle">Login</Link>
            </button>
         <Link to="/agency-login">
         <button
              className="border-yellow-400 border-b-2 mx-8 py-1"
              type="submit"
            >
              {" "}
              Car Rental Agency?
            </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
