import  Login  from './screens/pages/Auth/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './screens/pages/Auth/signup';
import './stylesheets/index.scss';
import Screens from './screens/pages/regular/screens';
import Error from './screens/pages/Auth/Error';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/header" element={<Dashboard />}/> */}
        <Route path="/dashboard/*" element={<Screens />}/>
        <Route path="/" element={<SignUp/> }/>
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </Router>
  );
}

export default App;
