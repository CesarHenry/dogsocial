import React from "react";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css"
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="tittle">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando ...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.lost} to="/login/lost">
        Esqueceu a senha?
      </Link>
      <div className={styles.create}>
        <h2 className={styles.subtittle}>Cadastre-se</h2>
        <p>Ainda não possui cadastro? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/create">
        Cadastro
      </Link>
    </section>
  );
};

export default LoginForm;
