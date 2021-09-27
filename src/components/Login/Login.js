import styles from './Login.module.css';

import { Route, Routes } from 'react-router';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';


const Login = () => {
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