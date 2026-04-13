import React from "react";
import styles from "./Reserva.module.css";

const locais = [
  {
    nome: "ITAIM",
    botoes: ["Fazer uma Reserva", "Ver o Menu"],
  },
  {
    nome: "CIDADE JARDIM",
    botoes: ["Fazer uma Reserva", "Ver o Menu"],
  },
  {
    nome: "CAMPINAS",
    botoes: ["Fazer uma Reserva", "Ver o Menu"],
  },
  {
    nome: "ANGRA",
    botoes: ["Reservar no WhatsApp", "Ver Rotas"],
  },
  {
    nome: "BRASÍLIA",
    botoes: ["Reservar no WhatsApp", "Ver Rotas"],
  },
];

export default function Reserva() {
  return (
    <section className="reserva">
      <h1>Faça sua reserva online</h1>

      <div className="reserva-container">
        {locais.map((local, index) => (
          <div key={index} className="reserva-card">
            <h2>{local.nome}</h2>

            {local.botoes.map((botao, i) => (
              <button key={i}>{botao}</button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}