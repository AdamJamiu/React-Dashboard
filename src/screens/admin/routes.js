import Error from "../../components/Error";
import GeneralAdminLayout from "./layouts";
import HomePage from "./pages/Home";

export const routeMapper = {
  home: "",
  login: "/auth/login",
  users: "/user",
};

const routeArray = [
  {
    path: routeMapper.home,
    element: <GeneralAdminLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "*", element: <Error /> },
];

export default routeArray;
