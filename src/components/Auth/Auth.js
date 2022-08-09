import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Button, FormControl } from "@mui/material";
import { UserContext } from "../../Contexts/UserContext";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const ariaLabel = { "aria-label": "description" };

export default function Auth() {
  const navigate = useNavigate();
  const { user, password, setUser, setPassword } = useContext(UserContext);
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const validate = () => {
    if (username !== "foo" || pass !== "bar") {
      alert("Invalid Credentials");
    } else {
      localStorage.setItem("user", JSON.stringify(true));
      setUser(true);
    }

    navigate("/");
  };

  return (
    <div className="form">
      <Input
        className="padding"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="user name"
        inputProps={ariaLabel}
      />
      <Input
        className="padding"
        onChange={(e) => setPass(e.target.value)}
        value={pass}
        placeholder="Password"
        inputProps={ariaLabel}
      />
      <Button className="padding" onClick={validate} variant="outlined">
        Log in
      </Button>
    </div>
  );
}
