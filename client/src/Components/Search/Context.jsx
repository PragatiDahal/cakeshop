import React, { useContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

let API = "";

const initialState = {
  query: "Blackforest",
};

//context creation
const AppContext = React.createContext();

// to create a provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // isloading = false;
    } catch (error) {
      console.log(error);
    }
  };

  //search
  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchQuery });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}`);
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, searchPost }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
