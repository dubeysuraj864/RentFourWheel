import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AllCards from "./pages/AllCards";
import AgencyRegister from "./pages/AgencyRegister";
import AgencyLogin from "./pages/AgencyLogin";
import AddVehicle from "./pages/AddVehicle";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/agency-register" element={<AgencyRegister/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/agency-login" element={<AgencyLogin />} />
            <Route path="/cards" element={<AllCards/>} />
            <Route path="/add-vehicle" element={<AddVehicle/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
