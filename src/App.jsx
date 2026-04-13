import "./App.css";
import Cadastro from "./pages/Form/Cadastro";
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/About/Sobre";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Reserva from "./pages/Reserva/Reserva";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">LOJA DE COMIDA</div>

      <div className="navBar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/produtos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p>Produtos</p>
        </NavLink>
        <NavLink
          to="/reserva"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p>Reserva</p>
        </NavLink>

        <NavLink
          to="Cadastro"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <p>Cadastre-se</p>
        </NavLink>

        <NavLink
          to="/sobre"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Sobre nós
        </NavLink>
      </div>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>

      <footer className="footer">&COPY, LOJA DE COMIDA</footer>
    </BrowserRouter>
  );
}

export default App;
