import React, { useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [touched, setTouched] = useState({
    nome: false,
    email: false,
    senha: false,
  });

  const erros = {
    nome: nome.trim() === "",
    email: !email.includes("@"),
    senha: senha.length < 6,
  };

  const formularioCorreto = !erros.nome && !erros.email && !erros.senha;

  function styleInput(campo) {
    return erros[campo] && touched[campo]
      ? styles.inputErro
      : styles.inputPadrao;
  }

  function handleBlur(campo) {
    setTouched((prev) => ({ ...prev, [campo]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formularioCorreto) {
      return setTouched({ nome: true, email: true, senha: true });
    }

    console.log("✅ Dados validados com sucesso !");
    alert(`✅ Cadastro realizado com sucesso ! Nome: ${nome}  Email: ${email}`);

    setNome("");
    setEmail("");
    setSenha("");
    setTouched({
      nome: false,
      email: false,
      senha: false,
    });
  }

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastre-se</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Nome
            <input
              type="text"
              value={nome}
              placeholder="Digite o seu nome"
              className={styleInput("nome")}
              onChange={(e) => setNome(e.target.value)}
              onBlur={() => handleBlur("nome")}
            />
            {erros.nome && touched.nome && (
              <span className={styles.msgErro}>
                ⚠ O campo nome deve ser preenchido !
              </span>
            )}
          </label>
          <label className={styles.label}>
            Email
            <input
              type="email"
              value={email}
              placeholder="Digite o seu email"
              className={styleInput("email")}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
            />
            {erros.email && touched.email && (
              <span className={styles.msgErro}>
                ⚠ O campo email deve conter @ !
              </span>
            )}
          </label>
          <label className={styles.label}>
            Senha
            <input
              type="password"
              value={senha}
              placeholder="Digite sua senha"
              className={styleInput("senha")}
              onChange={(e) => setSenha(e.target.value)}
              onBlur={() => handleBlur("senha")}
            />
            {erros.senha && touched.senha && (
              <span className={styles.msgErro}>
                ⚠ O campo senha precisa ter mais <br /> de 6 caracteres !
              </span>
            )}
          </label>

          <input
            type="submit"
            className={styles.btn}
            placeholder="Cadastrar"
            disabled={!formularioCorreto}
          />
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
