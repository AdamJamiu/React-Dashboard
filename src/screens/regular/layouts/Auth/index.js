import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <h1>Authentication layout</h1>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <footer></footer>
    </>
  );
}
