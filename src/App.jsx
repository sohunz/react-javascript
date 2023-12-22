import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";
import Card from './components/card/Card';
import HomeGreeting from "./components/content_render/HomeGreeting";
import CarList from "./components/list/carList";

const App = () => {
    const routes = [
        {
            path: "/",
            title: "Home",
            element: <HomePage />,
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
        {
            path: "/list",
            title: "List",
            element: <CarList />,
        },
    ];

    const myRoutes = routes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
    ));

    return (
        <BrowserRouter>
            <Navbar routes={routes}/>
            <Routes>{myRoutes}</Routes>
        </BrowserRouter>
    );
};

export default App;
