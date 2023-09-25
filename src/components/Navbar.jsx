import { Link, Outlet } from "react-router-dom";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav className="flex justify-between items-center p-4 md:py-4 md:px-20">
          <div className="logo font-bold text-4xl"><Link to="/">Luxury</Link></div>
          <div className="nav-links flex justify-center gap-6 items-center">
            <Link className="hover:border-yellow-500 border-transparent transition-all  border-b-[3px]" to="/login">
              <Login />
            </Link>
            <Link className="hover:border-yellow-500 border-transparent transition-all border-b-[3px]" to="/register">
              <Registration />
            </Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;