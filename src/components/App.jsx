import React from "react";
import './app.scss';
import { BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import AppRouter from "./appRouter/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;