import React from 'react';
import uk from './uk.jpg'
import st from './style.module.scss'

function NotFound() {
    return ( 
        <div className={st.notfound}>
            <p>Looks like you're a little lost.</p>
            <h2>Why not visit Cambridge?</h2>
            <img src={uk}/>
            <div className={st.number}>
                404
            </div>
        </div> 
    );
}

export default NotFound;