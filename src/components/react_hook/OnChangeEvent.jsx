import { useState } from "react";

const OnChangeEvent = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState();

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleNumber = (event) => {
        setNumber(event.target.value);
    };

    const handleComment = (event) => {
        setComment(event.target.value);
    };

    const handlePayment = (event) => {
        event.target.value === ""
            ? setPayment("")
            : setPayment(event.target.value);
    };

    return (
        <div className="container">
            <div className="container-app">
                <p className="title">Input as String</p>
                <label>Name </label>
                <input type="text" onChange={handleName} />
                <p>Name : {name}</p>
            </div>
            <br />
            <div className="container-app">
                <p className="title">Input as Number</p>
                <label>Number </label>
                <input type="number" onChange={handleNumber} />
                <p>Number : {number}</p>
            </div>
            <br />
            <div className="container-app">
                <p className="title">Input in textarea</p>
                <label>comment </label>
                <textarea
                    cols="30"
                    rows="5"
                    onChange={handleComment}
                ></textarea>
                <p>comment : {comment}</p>
            </div>{" "}
            <br />
            <div className="container-app">
                <p className="title">select box</p>
                <label>select </label>
                <select value={payment} onChange={handlePayment}>
                    <option value="">select an option</option>
                    <option value="Visa">visa card</option>
                    <option value="Mastercard">master card</option>
                    <option value="Giftcard">gift card</option>
                </select>
                <p>payment : {payment}</p>
            </div>
        </div>
    );
};

export default OnChangeEvent;
