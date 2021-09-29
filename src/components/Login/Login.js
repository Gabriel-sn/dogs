import styles from './Login.module.css';

import { Navigate, Route, Routes } from 'react-router';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';


const Login = () => {

    const {login} = useContext(UserContext);

    if(login === true) return <Navigate to='/conta'/>

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="criar" element={<LoginCreate />} />
                <Route path="recuperar" element={<LoginPasswordLost />} />
                <Route path="resetar" element={<LoginPasswordReset />} />
            </Routes>
        </div>
    )
}

export default Login;