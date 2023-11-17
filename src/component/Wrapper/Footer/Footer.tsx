import React from 'react';
import css from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={css.container}>
            <p>Розроблено курсантом Мельником Михайлом</p>
            <p>© 2023 Кафедра зв'язку Військового інституту. Усі права захищено.</p>
        </div>
    );
};

export default Footer;