

const Child = ({ logic, data, person }) => {
    return (
        <div>
            {
                data.map((item, i) => <p key={i}>{item}</p>)
            }
            <button onClick={logic}>click</button>
        </div>
    );
};

export default Child;
