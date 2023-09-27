import { Link, useNavigate } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";

function Navbar() {
  const customer = localStorage.getItem("customer");
  const agency = localStorage.getItem("agency");

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setTimeout(() => {
      navigate("/register");
    }, 500);
  }

  function logoClick() {
    if (customer) {
      navigate("/");
    }
  }

  return (
    <>
      <div className="navbar">
        <nav className="flex justify-between items-center p-4 md:py-4 md:px-20">
          <div className="logo font-bold text-4xl">
            <Link className="flex items-center" onClick={logoClick}>
              <GiCarWheel />
              Luxury
            </Link>
          </div>
          <div className="nav-links flex justify-center gap-6 items-center">
            <ul className="flex items-center m-3 p rounded-3xl ">
              {/* ----------- */}

              {agency ? (
                <>
                  <Link
                    to="/add-vehicle"
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    Add Vehicle
                  </Link>

                  <Link
                    to="/listed-vehicle"
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    View All Vehicle
                  </Link>
                </>
              ) : null}

              {customer ? (
                <>
                  <Link
                    to="/"
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    Welcome
                  </Link>
                  <Link
                    to="/cards"
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    All Vehicles
                  </Link>
                  <Link
                    to="/profile"
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    Profile
                  </Link>
                  <Link
                    onClick={logout}
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/login"
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                  >
                    Register
                  </Link>
                  {customer || agency ? (
                    <Link
                      onClick={logout}
                      className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
                    >
                      Logout
                    </Link>
                  ) : null}
                </>
              )}

              {/* ----------- */}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

// className="hover:border-yellow-500 py-2 mx-3 text-xl border-transparent transition-all  border-b-[3px]"
