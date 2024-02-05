const Child = ({ logic, data, person, title, players }) => {
    return (
        <div>
            <h1>{title}</h1>
            {data.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
            <button onClick={logic}>click</button>
            <br />
            <br />
            <br />

            {players.map((player, index) => {
                return (
                    <div key={index}>
                        <p>{player.name}</p>
                        <p>{player.age}</p>
                        <p>{player.club}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Child;
