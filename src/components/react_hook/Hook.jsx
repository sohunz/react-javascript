import CounterApp from "./CounterApp";
import OnChangeEvent from "./OnChangeEvent";
import MyComponent from './MyComponent'

const Hook = () => {
    return (
        <div>
            <CounterApp />
            <OnChangeEvent />
            <MyComponent />
        </div>
    );
};

export default Hook;
