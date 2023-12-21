import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Card from './components/card/Card';
import HomeGreeting from "./components/content_render/HomeGreeting";

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
        {
            path: "/card",
            title: "Card",
            element: <Card />,
        },
        {
            path: "/content-render",
            title: "Content Render",
            element: <HomeGreeting />,
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
