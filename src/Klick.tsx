import React, { useState } from 'react';

function Klick() {

    const [count, setCount] = useState(0);
    return(
      <div>
        <p>Du hast mich {count} mal gedrückt</p>
        <button onClick={() => setCount(count +1)}>Hau mich</button>
      </div>
    )
    }

export default Klick;