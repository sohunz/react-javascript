import Child from "./Child";

const LearnProps = () => {

    const data = ['a', 'b', 'c']

    const person = {name: 'ronaldo', age: 37, club: 'real madrid' };

    const myFun = () => {
        console.log("Hello World");
    }

    return (
        <div>
            <Child logic={myFun} data={data} person={person}/>
        </div>
    );
};

export default LearnProps;
