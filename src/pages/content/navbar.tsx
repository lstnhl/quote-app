import React from 'react'
import {NavLink} from 'react-router-dom'
import categories from 'misc/categories'
import s from './navbar.module.css'
import './navbar-active-link.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.nav__left_section}>
                <NavLink to='/' className={`${s.nav__item} ${s.nav__item_first}`}>
                    <span className={s.nav__item_first_full}>QUOTES APP</span>
                    <span className={s.nav__item_first_short}>Q</span>
                </NavLink>
                {categories.map(cat =>
                    <NavLink key={cat} to={`/${cat}`} className={s.nav__item}>{cat[0].toUpperCase() + cat.slice(1)}</NavLink>)}
            </div>
            <NavLink to='/liked' className={`${s.nav__item} ${s.nav__item_last}`}>
                <span className={s.nav__item_last_full}>Liked quotes</span>
                <span className={s.nav__item_last_short}>Liked</span>
            </NavLink>
        </nav>
    )
}

export default Navbar