/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import "../Header/Navbar.css";

const Navbar = ({ routes }) => {
    const location = useLocation();

    return (
        <div className="nav-bar">
            {routes.map((item) => (
                <div
                    key={item.path}
                    className={`nav-bar-link ${
                        location.pathname === item.path ? "active" : ""
                    }`}
                >
                    <Link to={item.path} className="nav-list">
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Navbar;
