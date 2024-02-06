import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState({ firstName: "", lastName: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    };

    return (
        <div>
            <h3>Form</h3>

            <p>Your Name : {name.firstName}</p>
            <p>Your Name : {name.lastName}</p>
            <form>
                <input
                    type="text"
                    onChange={(e) =>
                        setName({ ...name, firstName: e.target.value })
                    }
                    placeholder="first name"
                    value={name.firstName}
                />{" "}
                <br /> <br />
                <input
                    type="text"
                    onChange={(e) =>
                        setName({ ...name, lastName: e.target.value })
                    }
                    placeholder="last name"
                    value={name.lastName}
                />
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </div>
    );
};

export default Form;
