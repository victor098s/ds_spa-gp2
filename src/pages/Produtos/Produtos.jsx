
import React from "react";
import styles from "../Produtos/Produtos.module.css";


const produtos = [
  { nome: "Sushi de Salmão", descricao: "Salmão fresco com arroz temperado", preco: "R$ 22,90", img: "https://via.placeholder.com/150&quot" },
  { nome: "Temaki", descricao: "Cone de alga recheado", preco: "R$ 18,90", img: "https://via.placeholder.com/150&quot" },
  { nome: "Hot Roll", descricao: "Sushi empanado e crocante", preco: "R$ 25,90", img: "https://via.placeholder.com/150&quot"},
  { nome: "Sashimi", descricao: "Fatias finas de peixe fresco", preco: "R$ 29,90", img: "https://via.placeholder.com/150&quot" },
  { nome: "Uramaki", descricao: "Sushi com arroz por fora", preco: "R$ 24,90", img: "https://via.placeholder.com/150&quot" },
  { nome: "Yakissoba", descricao: "Macarrão com legumes e carne", preco: "R$ 27,90", img: "https://via.placeholder.com/150&quot" }
];

export default function Produtos() {
  return (
    <div className={styles.container}>
      {/* <header className={styles.header}>
        <h1>Sakura Blue</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Cardápio</a>
          <a href="#">Contato</a>
        </nav>
      </header> */}

      <section className={styles.banner}>
        <h2>Nossos Produtos</h2>
        <p>Tradição japonesa com um toque moderno</p>
      </section>

      <section className={styles.produtos}>
        {produtos.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <span>{item.preco}</span>
          </div>
        ))}
      </section>

      <section className={styles.destaque}>
        <h2>Produto do Dia</h2>
        <p>Combo especial com sushi, sashimi e temaki</p>
        <button>Peça agora</button>
      </section>

      {/* <footer className="footer">
        <p>Rua Exemplo, 123 - Japão</p>
        <p>© 2026 Sakura Blue</p>
      </footer> */}
    </div>
  );
}