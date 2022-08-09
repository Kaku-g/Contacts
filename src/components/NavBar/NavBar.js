import React, { useEffect, useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
//import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

import ContactsIcon from "@mui/icons-material/Contacts";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isUser, setIsUser] = useState(false);

  const logout = () => {
    setUser(false);
    localStorage.removeItem("user");
    navigate("/");
  };
  useEffect(() => {}, [user]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ContactsIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact-s
          </Typography>
          {user ? (
            <Button onClick={logout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/auth")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
