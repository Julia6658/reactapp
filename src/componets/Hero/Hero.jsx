import React from 'react'
import st from './style.module.scss';

function Hero(props) {
    return (
        <div className={st.hero_item}>
            <div><b> Имя:</b> {props.name}</div>
            <div><b>Вселенная:</b> {props.universe}</div>
            <div><b>Альтерэго:</b>{props.alterego}</div>
            <div><b>Род деятельности:</b>{props.occupation}</div>
            <div><b>Друзья:</b>{props.friends}</div>
            <div><b>Суперсилы:</b>{props.superpowers}</div>
            
                
            <div className={st.hero_info}>
                 <b>Описание:</b>{props.info}
            </div>
            <img src={props.url} className={st.hero_img} />
        </div>
    );
}

export default Hero;