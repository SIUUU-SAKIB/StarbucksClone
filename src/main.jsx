import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Rewards/Home";
import ContextProvider from "./Context/ContextProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />}>
         <Route path="/" element={<Home/>}></Route>
        </Route>
      </Routes>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
