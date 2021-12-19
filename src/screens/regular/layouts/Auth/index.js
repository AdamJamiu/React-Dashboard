import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <h1>Authentication layout</h1>
      <Outlet />
      <footer></footer>
    </>
  );
}
