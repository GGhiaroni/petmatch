import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "../pages/Contato";
import Favoritos from "../pages/Favoritos";
import Home from "../pages/Home";
import PaginaDetalhesCachorro from "../pages/PaginaDetalhesCachorro";
import PaginaEncontrar from "../pages/PaginaEncontrar";
import Header from "./componentes/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="encontrar" element={<PaginaEncontrar />} />
        <Route
          path="cachorros/:porte/:id"
          element={<PaginaDetalhesCachorro />}
        />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
