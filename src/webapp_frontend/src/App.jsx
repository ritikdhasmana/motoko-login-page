import React from "react";
import {  useRoutes,Routes, Route, Redirect } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./LogIn";



const App = () => useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/users", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/", element: <Login /> },
  ]);

export default App;