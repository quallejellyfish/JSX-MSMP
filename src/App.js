import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Reset from "./Pages/reset";
import SavedPosts from "./Pages/savedPosts";
import Timestamps from "./Pages/timespans";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/saved-posts",
    element: <SavedPosts />,
  },
  {
    path: "/saved-timestamp",
    element: <Timestamps />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
