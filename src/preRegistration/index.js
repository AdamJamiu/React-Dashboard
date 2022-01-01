import routeArray from "./routes";
import { BrowserRouter, useRoutes, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";
import LoginPage from "./pages/login.page";
import RegistrationPage from "./pages/register.page";
import "./css/index.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    function loadJs() {
      const arr = [
        "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",
        "/vendor/bootstrap/js/bootstrap.bundle.min.js",
      ];

      for (let srcLink of arr) {
        let script = document.createElement("script");

        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", srcLink);

        document.body.appendChild(script);
      }
    }

    window.addEventListener("load", () => {
      loadJs();
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
