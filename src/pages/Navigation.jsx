import { Routes, Route, HashRouter } from "react-router-dom";
import GetStart from "./GetStart";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Offlinepage from "./Offlinepage";

function Navigation() {
  return (
    <HashRouter>
        <Routes>
          <Route path={"/"} element={<GetStart />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
          <Route path={"*"} element={<Offlinepage/>}/>
        </Routes>
      </HashRouter>
  )
}

export default Navigation