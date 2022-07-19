/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useContext, ReactNode, MouseEvent } from "react";
import PropTypes from "prop-types";
import Slide from "@mui/material/Slide";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../public/img/logo.png";
import {
  IconButton,
  Fade,
  Fab,
  Box,
  CssBaseline,
  useScrollTrigger,
  Typography,
  Toolbar,
  AppBar,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import { AppContext, ContextType } from "./ContextProvider";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { AppProps } from "next/app";
import DrawerCom from "./Drawer";

function HideOnScroll({ children, window }: { children: any; window: any; }) {
  
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop({ children, window }: { children: any; window: any; }) {
  
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event:MouseEvent<HTMLButtonElement>) => {
    const anchor = (event.currentTarget.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// export type AppComponentProps = AppProps &  {
//   children:ReactNode
// }

export default function AppBarComponent(props:{children:ReactNode}) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const { user } = useContext(AppContext);

  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <Box>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="inherit" sx={{}}>
          <DrawerCom open={open} handleClose={handleClose}/>
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image width={50} height={50} src={logo} alt="logo" />
              <Typography sx={{ ml: 2, fontWeight: "bold" }} variant="h5">
                ECOMMERCE
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", alignItems: "center" },
                }}
              >
                
                 <Link  href={'/'}>
                    <a style={{ margin: "0 16px" }}>{"Home"}</a>
                  </Link>
                  {!user && <Link  href={'/login'}>
                    <a style={{ margin: "0 16px" }}>{"Login"}</a>
                  </Link>}
                  {user && <Link  href={'/profile'}>
                    <a style={{ margin: "0 16px" }}>{"Profile"}</a>
                  </Link>}
              </Box>

              
              <Box sx={{ display: { xs: "block", md: "none", mr: 2 } }}>
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon sx={{ color: "text.primary" }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <Box sx={{minHeight:"82vh"}}>{props.children}</Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}
