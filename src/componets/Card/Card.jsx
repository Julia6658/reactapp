import React, {useEffect, useState, useRef} from 'react';
import st from './style.module.scss'

function Card(props) {
    const {id, english, transcription, russian, learnt, setLearnt} = props;
    const [pressed, setPressed] = useState (false)
    const ref = useRef()
    
    useEffect(() => {
        if(!pressed) {
            ref.current.focus()
            console.log('focused')
        } 
    })

    const handleCheck = () => {
        setPressed(!pressed)
        setLearnt (learnt + 1)
    }
    
    const translation = (
        <div className={st.translation}>{russian}</div>
    )
    const checkBtn = (
        <div className={st.btn} ref={ref} onClick={handleCheck}> Проверить</div>
    )

    return ( 
        <div className={st.card} id={id}>
            <div className={st.english_word}>{english}</div>
            <div className={st.transcript}>{transcription}</div>
            <>{pressed ? translation : checkBtn}</>
        </div> 
    );
}

export default Card;