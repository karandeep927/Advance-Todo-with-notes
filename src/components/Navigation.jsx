import { Routes, Route, HashRouter } from "react-router-dom";
import GetStart from "../pages/GetStart";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Offlinepage from "../pages/Offlinepage";

function Navigation() {
  return (
    <HashRouter>
        <Routes>
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"/"} element={<GetStart />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"*"} element={<Offlinepage/>}/>
        </Routes>
      </HashRouter>
  )
}

export default Navigation