import {
    Drawer,
    Box,
    ListItemIcon,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import AccountCircleIcon from "@mui/icons-material/AccountCircle";
  import React, { useContext,useEffect } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import { ContextType,AppContext } from "./ContextProvider";

type Props = {
    open:boolean,
    handleClose: () => void
}

  export default function DrawerCom({ open, handleClose }:Props) {

    const { user } = useContext<ContextType>(AppContext);

    useEffect(()=>{
      if(!user){
        router.push('/')
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const listAry = [
      {
        id: 1,
        navi: "/",
        icon: <HomeIcon />,
        text: "Home",
      },
      {
        id: 2,
        navi: user ? "/profile" : "/login",
        icon: <AccountCircleIcon />,
        text: user ? "Profile" : "Login",
      },
    ]  
  
    const router = useRouter();
  
    const handleClick = (navi:string) => {
    router.push(navi);
      handleClose();
    };
  
    return (
      <Drawer anchor="right" open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton onClick={handleClose} sx={{ p: 2, m: 2 }}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>
          <List>
            {listAry.map((item) => (
              <ListItem key={item.id} onClick={() => handleClick(item.navi)}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          
          </List>
        </Box>
      </Drawer>
    );
  }