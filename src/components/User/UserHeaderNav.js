import styles from './UserStyle.module.css';

import { useContext, useEffect, useState } from "react";
import {useLocation} from 'react-router';
import useMedia from '../../Hooks/useMedia';
import { NavLink } from "react-router-dom"
import { UserContext } from '../../UserContext';
import {ReactComponent as MinhasFotos} from '../../assets/feed.svg';
import {ReactComponent as Estatisticas} from '../../assets/estatisticas.svg';
import {ReactComponent as Adicionar} from '../../assets/adicionar.svg';
import {ReactComponent as Sair} from '../../assets/sair.svg';

const UserHeaderNav = () => {
    const {userLogout} = useContext(UserContext);
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false);

    const {pathname} = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button aria-label="Menu"
                className={`${styles.mobileButton} 
                    ${mobileMenu && styles.mobileButtonActive}`}
                onClick={() => setMobileMenu(!mobileMenu)}>
                    
                </button>
            )}
            <nav className={`
                ${mobile ? styles.navMobile : styles.nav}
                ${mobileMenu && styles.navMobileActive}
            `}>
                <NavLink to="/conta" end><MinhasFotos />{mobile && 'Minhas Fotos'}</NavLink>
                <NavLink to="/conta/estatisticas"><Estatisticas />{mobile && 'Estatísticas'}</NavLink>
                <NavLink to="/conta/postar"><Adicionar />{mobile && 'Adicionar'}</NavLink>
                <button onClick={userLogout}><Sair /></button>
            </nav>
        </>
    )
}

export default UserHeaderNav;