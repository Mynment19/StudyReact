import { useState } from "react";

const Conuter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    );
}

export default Conuter;