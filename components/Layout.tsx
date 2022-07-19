import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React,{ReactNode} from "react";
import ContextProvider from "./ContextProvider";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Footer from "./Footer";

export default function Layout({ children }:{children:ReactNode}) {
  return (
    <AnimatePresence>
      <ContextProvider>
        <Box
          sx={{
            maxWidth: "100vw",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
        <ToastContainer position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              draggable
              pauseOnHover/>
          <Header>
            {children}
          </Header>  
        <Footer/>
        </Box>
      </ContextProvider>
    </AnimatePresence>
  );
}