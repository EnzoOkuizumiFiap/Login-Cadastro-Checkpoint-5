import Cabecalho from "./components/Cabecalho/cabecalho";
import { Outlet } from "react-router-dom";
import './globals.css';

export default function App() {

  return (
    <div className="container">
      <Cabecalho />
      <Outlet />
    </div>
  );
}