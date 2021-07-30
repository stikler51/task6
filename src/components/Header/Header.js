import React from "react";
import { NavLink } from "react-router-dom"
import styles from "./Header.module.scss"

const Header = () => {
    return <header className={styles.header}>
        <nav className={styles.mainMenu}>
            <NavLink activeStyle={{color: "#06a0ef"}} exact to="/">Главная</NavLink>
            <NavLink activeStyle={{color: "#06a0ef"}} to="/employees">Сотрудники</NavLink>
        </nav>
    </header>
}

export default Header