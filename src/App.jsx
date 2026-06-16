import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Listagem from "./pages/Listagem";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listagem" element={<Listagem />} />

        {/* Página que sua colega vai desenvolver */}
        <Route
          path="/cadastro"
          element={<h1>Página de Cadastro</h1>}
        />
      </Routes>
    </>
  );
}

export default App;