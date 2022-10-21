import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Post from "pages/Post";
import Rodape from "components/Rodape";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}