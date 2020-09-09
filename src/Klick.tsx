import React, { useState } from 'react';
import './Klick.css'

function Klick() {

    const [count, setCount] = useState(0);
    
    return(
      <div>
        <p>Du hast mich {count} mal gedrückt</p>
        <button className='MainKlick' onClick={() => setCount(count +1)}>Hau mich</button>
        <button className='MainKlick' onClick={() => setCount(0)}>Reset Component</button>
      </div>
    )
    }

export default Klick;