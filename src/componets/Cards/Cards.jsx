import React, {useState} from 'react';
import st from './cards.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import words from '../../data/words.json';  
import Card from '../Card/Card'

function Cards(props) {
    const {indexCard} = props;
    const [index, setIndex] = useState(indexCard ? indexCard : 0);
    const [learnt, setLearnt] = useState(0);


    const handlePrevCard = () => {
        if (index > 0) {
            setIndex(index-1)
        }
        if (index === 0) {
            setIndex(words.length - 1)
        }
    }
    const handleNextCard = () => {
        if (index === words.length - 1) {
            setIndex(0)
            console.log(words.length)
        } else {
            setIndex(index+1)
        }
    }

    return ( 
        <div className="cards">   
            <div>Изучено слов: {learnt}</div>      
            <div className="card_wrapper">
                <button className="btn_prev" onClick={handlePrevCard}>
                    <BsChevronLeft/>
                </button>
                <TransitionGroup>
                    <CSSTransition key={index} timeout={34500} classNames="card" >                   
                            <Card key={index} 
                                english={words[index].english} 
                                transcription={words[index].transcription} 
                                russian={words[index].russian}
                                indexCard = {words[8]} 
                                learnt = {learnt}
                                setLearnt = {setLearnt}
                                 
                            /> 
                    </CSSTransition>
                </TransitionGroup>
                <button className="btn__next" onClick={handleNextCard}>
                    <BsChevronRight/>
                </button>
            </div>
            <div className={st.counterWords}>{index + 1} / {words.length}</div>
        </div>
    );
}

export default Cards;








