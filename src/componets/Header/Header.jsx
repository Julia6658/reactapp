import React from 'react';
import logo from './logo.svg'
import st from './style.module.scss'
import {
    Link
} from "react-router-dom";

function Header() {
    return ( 
        <div className={st.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/reactapp/"><img src={logo}/></Link>
                    </li>
                    <li>
                        <Link to="/reactapp/game">Тренировать слова</Link>
                    </li>
                </ul>
            </nav>         
        </div> 
    );
}

export default Header;

