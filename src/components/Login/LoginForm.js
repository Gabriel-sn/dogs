import styles from './Login.module.css';
import stylesBtn from '../Buttons/Button.module.css';

import { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Button from "../Buttons/Button";
import Input from "../Forms/Input";
import Error from "../Helper/Error";


const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const {userLogin, error, loading} = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if(username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }

    }

    return (
        <section className="animeLeft">
            <h1 className="title">Login</h1>

            <form className={styles.form} onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" inputName="username" {...username}/>
                <Input label="Senha" type="password" inputName="password" {...password}/>

                {loading ? 
                    (<Button disabled>Carregando...</Button>) :
                    (<Button>Entrar</Button>)
                }
                
                <Error error={error}/>
            </form>
            
            <Link className={styles.recuperar} to='/login/recuperar'>
                Perdeu a senha?
            </Link>
            
            <div className={styles.cadastrar}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
            </div>
        </section>
    )
}

export default LoginForm;