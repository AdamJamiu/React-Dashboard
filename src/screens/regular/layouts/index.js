import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function GeneralRegularLayout() {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <Navigation />
      <div className="border flex-auto">
        <Outlet />
      </div>
      <Navigation.Footer />
    </div>
  );
}
