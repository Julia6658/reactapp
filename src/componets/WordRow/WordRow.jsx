import React, {useState} from 'react';
import { BsFillPencilFill, BsPlus } from "react-icons/bs";

import st from './style.module.scss'

function WordRow(props) {
    
    const {id, index, english, transcription, russian} = props;
    const [click, setClicked] = useState (false);
    const [valueEnglish, setValueEnglish] = useState(english);
    const [valueRussian, setValueRussian] = useState(russian);
    const [valueTranscript, setValueTranscript] = useState(transcription)
 
    const handleEditRaw = () => {
        setClicked(!click)
    }

    const rowEdited = ( 
        <div className={st.wordRow + " " + st.wordRow_edit} key={id}>
            <div className={st.wordNum}>{ index + 1 }</div>
            <div><input type="text" value={valueEnglish} onChange={e => setValueEnglish(e.target.value)}/></div>
            <div><input type="text" value ={valueTranscript} onChange={e => setValueTranscript(e.target.value)}/></div>
            <div><input type="text" value={valueRussian} onChange={e => setValueRussian(e.target.value)}/></div>
            <div><button className={st.cancel} onClick={handleEditRaw}><BsPlus/></button></div>
        </div>
        );

    const rowDefault = (
        <div className={st.wordRow} key={id}>
            <div className={st.wordNum}>{ index + 1 }</div>
            <div>{english}</div>
            <div>{transcription}</div>
            <div>{russian}</div>
            <div><button className={st.edit} onClick={handleEditRaw}><BsFillPencilFill/></button></div>
        </div>
        );
    return ( 
        click ? rowEdited : rowDefault
     );
}

export default WordRow;