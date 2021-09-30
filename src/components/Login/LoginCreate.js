import Button from '../Buttons/Button';
import Input from "../Forms/Input";
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';


const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm('password');

    const {userLogin, loading} = useContext(UserContext);

    async function handleSubmit (event){
        event.preventDefault();
        const {url, options} = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });

        const response = await fetch(url, options);
        if(response.ok) userLogin(username.value, password.value);

    }

    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>

            <form onSubmit={handleSubmit}>
                <Input label="Usuário" type="text" inputName="username" {...username}/>
                <Input label="Email" type="email" inputName="email" {...email}/>
                <Input label="Senha" type="password" inputName="password" {...password}/>
                
                {loading ? 
                    (<Button disabled>Carregando...</Button>) :
                    (<Button>Cadastrar</Button>)
                }
            </form>
        </section>
    )
}

export default LoginCreate;