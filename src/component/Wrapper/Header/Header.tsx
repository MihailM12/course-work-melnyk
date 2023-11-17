import React from 'react';
import css from "./Header.module.css"
import logo from "../../../assets/logo.png"
import {Link} from "react-router-dom";
import {RouterNames} from "../../../router/RouterNames";
import NavLink from "../../NavLink/NavLink";

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logoContainer}>
                <img className={css.logo} src={logo} alt="logo"/>
                <div className={css.title}>
                    Web портал кафедри радіозвязку ВВНЗ
                </div>
            </div>

            <div className={css.linksContainer}>
                <NavLink to={RouterNames.HOME}>Головна</NavLink>
                <NavLink to={RouterNames.NEWS}>Новини</NavLink>
                <NavLink to={RouterNames.ABOUT}>Про нас</NavLink>
                <NavLink to={RouterNames.MANAGE}>Адміністрування</NavLink>
            </div>

        </div>
    );
};

export default Header;