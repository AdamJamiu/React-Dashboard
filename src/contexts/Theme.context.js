import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";

export const ThemeContext = createContext();

const contextReducer = (state, { type, value }) => {
  switch (type) {
    default: {
      if (type) return { ...state, [type]: value };
      return state;
    }
  }
};

const defaultContext = {
  current: "light",
};

export default function ThemeContextProvider(props) {
  useEffect(() => {
    console.log("Hello theme context");
  }, []);
  const [theme, setTheme] = useReducer(contextReducer, defaultContext);

  return (
    // TODO: Set theme configurations here
    <ThemeContext.Provider value={{ setTheme, theme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}
