import React from 'react';
import './Formular.css'

function Formular() {
    return(
       <form action="Seite2.tsx" className="formular">
            <fieldset>
                <label htmlFor="">
                    <h2>
                        Wie heißt du?
                    </h2>
                </label>
            </fieldset>
            <fieldset>
                <input type="text"/>
                <button  className='abschicken'>Abschicken</button>   
            </fieldset> 
       </form>
    )
}



export default Formular;