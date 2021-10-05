import React from "react";
import './app.scss';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import AppRouter from "./appRouter/AppRouter";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>

  );
}

export default App;