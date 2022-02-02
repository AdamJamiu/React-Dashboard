import { Route, Routes } from 'react-router-dom';
import Navbar from '../../../components/navigations/Header';
import SideNav from '../../../components/navigations/Sidenav';
import HomeScreen from '../Home/index';
import UsersPage from '../users';

const DashboardSubPages = [
  {
    path: ':home',
    element: <HomeScreen />
  },
  {
    path: ':user',
    element: <UsersPage />
  }
];

const Screens = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <div className="screen">
        {DashboardSubPages.map((index, item) => (
          <Routes key={item}>
            <Route element={index.element} path={index.path} />
          </Routes>
        ))}
      </div>

      {/* <NewScreens/> */}
    </>
  );
};

export default Screens;
