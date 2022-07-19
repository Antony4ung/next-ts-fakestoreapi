import {
  ThemeProvider,
  createTheme,
  ListItemSecondaryAction,
} from "@mui/material";
import React, { createContext, useReducer, useState, ReactNode } from "react";

export type ContextType = {
  darkMode: boolean;
  setDarkMode: (value: React.SetStateAction<boolean>) => void;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

export const AppContext = createContext({} as ContextType);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(null);

  //   const reducer = (state, action) => {
  //     const { type, payload } = action;

  //     const isCart = state.items.find((item) =>
  //       item.id === payload.id ? true : false
  //     );

  //     switch (type) {
  //       case "add":
  //         return {
  //           ...state,
  //           items: isCart
  //             ? state.items.map((item) =>
  //                 item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
  //               )
  //             : [...state.items, { ...payload, qty: 1 }],
  //         };

  //       case "remove":
  //         return {
  //           // items: [state.items.map((item) => item.id !== payload.id)],
  //           ...state,
  //           items: state.items.filter((item) => item.id !== payload.id),
  //         };
  //       default:
  //         return state;
  //     }
  //   };

  //   const [cart, dispatch] = useReducer(reducer, { items: [] });

  const AppTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        user,
        setUser,
        // cart,
        // dispatch,
      }}
    >
      <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
