import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AllCards from "./pages/AllCards";
import AgencyRegister from "./pages/AgencyRegister";
import AgencyLogin from "./pages/AgencyLogin";
import ListedVehicle from "./pages/ListedVehicle";
import AddVehicle from "./pages/AddVehicle";
import EditVehicle from "./pages/EditVehicle";
import PrivateComponents from "./components/PrivateComponents";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import BookNowPage from "./pages/BookNowPage";

function App(location) {
  const [vehicleData, setVehicleData] = useState();
  useEffect(() => {
    const getVehicleData = async () => {
      const data = await fetch("https://rent4wheel.000webhostapp.com/vehicle.php");
      const result = await data.json();
      console.log(result);
      setVehicleData(result);
    };
    getVehicleData();
  }, []);
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        {location.path !== "/login" && <Navbar />}

        <Routes>
          <Route element={<PrivateComponents />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/cards" element={<AllCards />} />
            <Route
              path="/book-now/:id"
              element={<BookNowPage data={vehicleData} />}
            />
          </Route>
          <Route path="/register" element={<Registration />} />
          <Route path="/agency-register" element={<AgencyRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agency-login" element={<AgencyLogin />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/edit-vehicle/:id" element={<EditVehicle />} />
          <Route path="/listed-vehicle" element={<ListedVehicle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
