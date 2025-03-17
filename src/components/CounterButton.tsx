import { useState } from 'react';

function CounterButton() {
    const [count, setCount] = useState(5);

    return(
        <div>
            <button onClick= {() => setCount((count) => count + 5)}>{ count}</button>
        </div>
    )
}
    

export default CounterButton;