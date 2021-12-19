import { createContext, useContext, useEffect } from "react";

export const ServiceContext = createContext();

export default function ServiceContextProvider(props) {
  useEffect(() => {
    console.log("Hello service context");
  }, []);
  // TODO: Set service configurations here
  return (
    <ServiceContext.Provider value={{ baseURL: "https://bitcost.com" }}>
      {props.children}
    </ServiceContext.Provider>
  );
}
