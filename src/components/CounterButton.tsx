import { useState } from 'react';

function CounterButton() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>{ count > 1000 ? "A large amount" : count  }</h1>
            <button onClick= {() => setCount((count) => count + 50)}>Click Me</button>
        </div>
    )
}
    

export default CounterButton;