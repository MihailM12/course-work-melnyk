import React from 'react';
import css from "./Header.module.css"

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logoContainer}>
                <img src="" alt="logo"/>
                <div>
                    Web портал кафедри радіозвязку ВВНЗ
                </div>
            </div>
        </div>
    );
};

export default Header;