import { createContext, useReducer } from "react";

export const ContextState = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return [...state, action.data];
    case "DELETE_PERSON":
      return;
    case "EDIT_PERSON":
      return;
    default:
      break;
  }
};

export const ContextProvider = ({ children }) => {
  const [person, dispatch] = useReducer(reducer, []);

  return (
    <ContextState.Provider value={[person, dispatch]}>
      {children}
    </ContextState.Provider>
  );
};
