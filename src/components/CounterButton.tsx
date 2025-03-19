import { useState } from 'react';

function CounterButton() {
    const [count, setCount] = useState(0);
    const text = "Word Count";

    return( 
        <div>
            <h1>{ count > 1000 ? "A large amount" : text}</h1>
            <h3>{ count }</h3>
            <button onClick= {() => setCount((count) => count + 50)}>Click Me</button>
        </div>
    )
}
    

export default CounterButton;