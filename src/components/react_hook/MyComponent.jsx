import { useState } from "react";
import "./counter.css";

const MyComponent = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    };

    const Decrement = () => {
        setCount(count - 1);
    };

    const Reset = () => {
        setCount(0);
    };

    return (
        <div className="container">
            <p className="count">{count}</p>
            <div>
                <button className="btn-decrement" onClick={Decrement}>
                    Decrement
                </button>
                <button className="btn-reset" onClick={Reset}>
                    Reset
                </button>
                <button className="btn-increment" onClick={Increment}>
                    Increment
                </button>
            </div>
        </div>
    );
};

export default MyComponent;
