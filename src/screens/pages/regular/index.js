// import Header from "../../../components/navigations/Header";
// import SideNav from "../../../components/navigations/Sidenav";
import HomeScreen from '../Home/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTable from '../users';

const RegularScreen = () => {
  return (
    <>
      <div className="screen-container">
        <Router>
          <Routes>
            <Route path="/" exact element={<HomeScreen />}/>
            <Route path="users" element={<UserTable/> }/>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default RegularScreen;
