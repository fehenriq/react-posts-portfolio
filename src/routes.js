import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="*" element={<div>Página não encontrada.</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}