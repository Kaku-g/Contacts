import "./App.css";
import React, { useContext, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import { UserContext, UserProvider } from "./Contexts/UserContext";
import Loader from "./components/Loader/Loader";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
