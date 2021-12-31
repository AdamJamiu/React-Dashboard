import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AdminScreen from "./admin";
import RegularScreen from "./regular";
import WOW from "wowjs";

export default function Screens() {
  const wow = new WOW.WOW({
    boxClass: "wow",
    animateClass: "animated",
    mobile: false,
  });

  wow.init();
  useEffect(() => {
    wow.sync();
  }, []);
  
  return (
    <Routes>
      <Route path="*" element={<RegularScreen />}></Route>
      <Route path="/admin" element={<AdminScreen />} />
    </Routes>
  );
}
