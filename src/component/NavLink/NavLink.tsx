import React, {FC, ReactNode} from 'react';
import {Link} from "react-router-dom";
import css from "./NavLink.module.css"

interface LinkProps {
    to: string;
    children: ReactNode;
}

const NavLink: FC<LinkProps> = ({to, children}) => {
    return (
        <Link className={css.link} to={to}>
            {children}
        </Link>
    );
};

export default NavLink;