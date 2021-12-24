import GeneralRegularLayout from "./layouts";
import HomePage from "./pages/Home";
import Error from "../../components/Error";
// import AuthLayout from "./layouts/Auth";
import Authentication from "./pages/Auth";

/**
 * @description Returns route map for regular screen
 * @returns Object
 */
export const routeMapper = {
  home: "",
  login: "/auth",
  register: "/auth/register",
  forgot: "/auth/forgot",
};

/**
 * @import { RouteObject } from "react-router-dom"
 * @returns Array
 */
const routeArray = [
  {
    path: routeMapper.home,
    element: <GeneralRegularLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  // Authentication pages
  {
    path: routeMapper?.login,
    element: <GeneralRegularLayout />,
    children: [
      { index: true, element: <Authentication /> },
      {
        path: routeMapper.register,
        element: <Authentication.RegistrationPage />,
      },
      {
        path: routeMapper.forgot,
        element: <Authentication.ForgotPassword />,
      },
    ],
  },
  // Error page
  { path: "*", element: <Error /> },
];

export default routeArray;
