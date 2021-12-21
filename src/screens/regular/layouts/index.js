import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function GeneralRegularLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navigation />
      <div className="flex-auto">
        <Outlet />
      </div>
      <Navigation.Footer />
    </div>
  );
}
