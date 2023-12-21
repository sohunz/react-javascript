import UserGreeting from "./UserGreeting";

const HomeGreeting = () => {
    return (
        <div>
            <UserGreeting username="Jasmine" isLoggedIn={true} />
        </div>
    );
};

export default HomeGreeting;
