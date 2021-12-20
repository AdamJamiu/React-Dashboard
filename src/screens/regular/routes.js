import GeneralRegularLayout from "./layouts";
import HomePage from "./pages/Home";
import Error from "../../components/Error";
import AuthLayout from "./layouts/Auth";
import Authentication from "./pages/Auth";

/**
 * @description Returns route map for regular screen
 * @returns Object
 */
export const routeMapper = {
  home: "",
  login: "/auth",
  register: "/auth/register",
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
    element: <AuthLayout />,
    children: [
      { index: true, element: <Authentication /> },
      {
        path: routeMapper.register,
        element: <Authentication.RegisterPage />,
      },
    ],
  },
  // Error page
  { path: "*", element: <Error /> },
];

export default routeArray;
