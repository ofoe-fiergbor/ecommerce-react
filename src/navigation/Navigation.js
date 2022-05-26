import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../view/page/login/Login";
import Home from "../view/page/home/Home";
import PrivateRoute from "./PrivateRoute";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute component={<Home />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
