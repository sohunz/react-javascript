import Child from "./Child";

const LearnProps = () => {
    // props pass as data as string
    const title = "Learning Porps";

    //props pass as array
    const data = ["a", "b", "c"];

    // props pass as object
    const person = { name: "ronaldo", age: 37, club: "real madrid" };

    // props pass as function
    const myFun = () => {
        console.log("Hello World");
    };

    // props pass as array object
    const players = [
        { name: "ronaldo", age: 39, club: "real madrid" },
        { name: "mess", age: 32, club: "psg" },
        { name: "neymar", age: 36, club: "barcelona" },
    ];

    return (
        <div>
            <Child
                logic={myFun}
                data={data}
                person={person}
                title={title}
                players={players}
            />
        </div>
    );
};

export default LearnProps;
