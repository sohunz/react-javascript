import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

const App = () => {
    const routes = [
        {
            path: "/",
            title: "Home",
            element: <HomePage />,
        },
        {
            path: "/about",
            title: "About",
            element: <AboutPage />,
        },
        {
            path: "/contact",
            title: "Contact",
            element: <ContactPage />,
        },
    ];

    const myRoutes = routes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
    ));

    return (
        <BrowserRouter>
            <Navbar routes={routes} />
            <Routes>{myRoutes}</Routes>
        </BrowserRouter>
    );
};

export default App;
