import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PaginaEncontrar from "../pages/PaginaEncontrar";
import Header from "./componentes/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="encontrar" element={<PaginaEncontrar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
