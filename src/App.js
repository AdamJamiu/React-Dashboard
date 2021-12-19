import { BrowserRouter } from "react-router-dom";
import Screens from "./screens";
import "./shared/stylesheets/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Screens />
    </BrowserRouter>
  );
}

export default App;
