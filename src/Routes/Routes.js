//1. import area 
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const routes = [
    {
        path : "",
        element : <Home/>
    },
    {
        path : "login",
        element : <Login/>
    },
    {
        path: "Register",
        element : <Register/>
    },
    
]