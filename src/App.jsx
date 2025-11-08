import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import FAQ from "./pages/About/";

import "./App.css";

function RootLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "about",
        Component: About
      }
    ]
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
