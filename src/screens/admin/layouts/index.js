import { Outlet } from "react-router-dom";

export default function GeneralAdminLayout() {
  return (
    <>
      <header>Admin header</header>
      <Outlet />
      <footer>Admin Footer</footer>
    </>
  );
}
