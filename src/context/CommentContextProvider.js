import axios from "axios";
import React, { createContext, useReducer } from "react";

export const comentContext = createContext();

const API = "http://localhost:8000/comment";

const INIT_STATE = {
  coment: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_COMENT":
      return {
        ...prevState,
        coment: action.payload.data,
      };
    default:
      return prevState;
  }
}

const ComentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // async function readOneProduct(id) {
  //   const { data } = await axios(`${API}/${id}`);
  //   dispatch({
  //     type: "GET_ONE_PRODUCT",
  //     payload: data,
  //   });
  // }
  async function addComent(newComent) {
    try {
      await axios.post(API, newComent);
      readComent();
    } catch (error) {
      return error;
    }
  }

  async function readComent() {
    try {
      const res = await axios(API);
      dispatch({
        type: "GET_COMENT",
        payload: res,
      });
    } catch (error) {
      return error;
    }
  }

  async function deleteComent(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readComent();
    } catch (error) {
      return error;
    }
  }

  // console.log(state.coment);
  const cloud = {
    addComent,
    readComent,
    deleteComent,
    comentArr: state.coment,
  };
  return (
    <comentContext.Provider value={cloud}>{children}</comentContext.Provider>
  );
};

export default ComentContextProvider;
