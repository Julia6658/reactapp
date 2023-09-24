import React from 'react';
import st from './style.module.scss';
import words from '../../data/words.json'; 
import WordRow from '../WordRow/WordRow'

function WordsList() {

    return (
        <div className={st.wordsList}>
           
            {
                words.map((word, index) => 
                 <WordRow key={index} id ={word.id} index={index} english={word.english} transcription={word.transcription} russian={word.russian}/>
                )
            }
        </div>
    )
}

export default WordsList;




