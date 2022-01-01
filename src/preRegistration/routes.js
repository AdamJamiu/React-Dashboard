import { Outlet } from "react-router";
import HomePage from "./pages/home.page";
import LoginPage from "./pages/login.page";
import RegistrationPage from "./pages/register.page";

function Layout() {
  return (
    <>
      <header></header>
      <Outlet />
      <footer></footer>
    </>
  );
}
function NoMatch() {
  return (
    <>
      <header></header>
      <div>404 | Not found!</div>
      <footer></footer>
    </>
  );
}
/**
 * @description Returns route map for regular screen
 * @returns Object
 */
export const routeMapper = {
  home: "/",
  login: "/login",
  register: "/register",
  forgot: "/forgot",
};

/**
 * @import { RouteObject } from "react-router-dom"
 * @returns Array
 */
const routeArray = [
  {
    path: routeMapper.home,
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  // Authentication pages
  {
    path: routeMapper?.login,
    element: <homePage />,
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: routeMapper.register,
        element: <RegistrationPage />,
      },
    ],
  },
  // Error page
  { path: "*", element: <NoMatch /> },
];

export default routeArray;
