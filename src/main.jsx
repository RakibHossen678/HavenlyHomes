import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import Authprovider from "./AuthProvider/Authprovider";
import { Toaster } from 'react-hot-toast';
import {  HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      <Toaster />
    </Authprovider>
  </React.StrictMode>
);
