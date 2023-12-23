import { useState } from "react";
import { useEffect } from "react";

const LearnUseEffect = () => {
    const [name, setName] = useState("messi");
    const [age, setAge] = useState(20);

    // state name
    const changeName = () => {
        setName("ronaldo");
    };

    //state age
    const changeAge = () => {
        setAge(23);
    };

    // useEffect function : the useEffect will run when state name changing
    useEffect(() => {
        console.log("useEffect ran");
        console.log("state change", name);
    }, [name]); // [name] when state name change the useEffect will run 

    return (
        <div className="container">
            <p>{name}</p>
            <button onClick={changeName}>change name</button>
            {age}
            <button onClick={changeAge}>change name</button>
        </div>
    );
};

export default LearnUseEffect;
