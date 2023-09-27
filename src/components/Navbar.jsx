import { Link, useNavigate } from "react-router-dom";
import { GiCarWheel } from "react-icons/gi";

function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };
  return (
    <>
      <div className="navbar">
        <nav className="flex justify-between items-center p-4 md:py-4 md:px-20">
          <div className="logo font-bold text-4xl">
            <Link className="flex items-center" to="/">
              <GiCarWheel />
              Luxury
            </Link>
          </div>
          <div className="nav-links flex justify-center gap-6 items-center">
            <ul className="flex items-center m-3 p rounded-3xl ">
              {auth ? (
                <>
                  <li className="mx-2">
                    <Link to="/">Welcome</Link>
                  </li>

                  <li className="mx-2">
                    <Link to="/Profile">Profile</Link>
                  </li>
                </>
              ) : null}

              <li className="mx-2">
                {auth ? (
                  <Link to="/Logout" onClick={logout}>
                    Logout
                  </Link>
                ) : (
                  <>
                    <Link
                      className="hover:border-yellow-500 py-2 mx-3 text-2xl border-transparent transition-all  border-b-[3px]"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="hover:border-yellow-500 py-2 mx-3 text-2xl border-transparent transition-all border-b-[3px]"
                      to="/register"
                    >
                      Registration
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
