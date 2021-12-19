// import { render } from "react-dom";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "./admin";
import RegularScreen from "./regular";

export default function Screens() {
  return (
    <Routes>
      <Route path="*" element={<RegularScreen />}>
      </Route>
      <Route path="/admin" element={<AdminScreen/>}/>
    </Routes>
  );
}
