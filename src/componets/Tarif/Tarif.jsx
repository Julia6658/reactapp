
import React, {useState} from 'react';
import st from'./style.module.scss';


function Tarif(props) {
    const [isSelected, setSelected] = useState (false)

    const handleClick = () => {
        setSelected(!isSelected)
        
    }
    //let classSelected = (isSelected ? "selected" : "")
        
    return (
        <div className={st.tarif_item + " " + st[props.color] + " " + st[isSelected ? "selected" : ""]} onClick={handleClick}>
            <div className={st.tarif__header}>Безлимитный <span>{props.plan}</span></div>
            <div className={st.tarif__price}><span>руб</span> <span className={st.price}>{props.price}</span><span>/мес</span></div>
            <div className={st.tarif__speed}>до {props.speed} Мбит/сек</div>
                
            <div className={st.tarif__footer}>
                Объём включённого трафика не ограничен
            </div>

        </div>
    );
}
export default Tarif;