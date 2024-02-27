import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Header/Navbar";
import Card from "./components/card/Card";
import HomeGreeting from "./components/content_render/HomeGreeting";
import CarList from "./components/list/carList";
import Hook from "./components/react_hook/Hook";
import ColorPicker from "./components/ColorPickerApp/ColorPicker";
import TodoList from "./components/TodoListApp/TodoList";
import LearnProps from "./components/props/LearnProps";
import FetchApi from "./components/fetch_api/FetchApi";
import Home from "./components/Blog/Home";
import BlogDetail from "./components/Blog/BlogDetail";
import Form from "./components/form/Form";
import UserList from "./components/user_list/UserList";

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
        {
            path: "/hook",
            title: "React Hook",
            element: <Hook />,
        },
        {
            path: "/color-picker",
            title: "Color Picker",
            element: <ColorPicker />,
        },
        {
            path: "/todo",
            title: "Todo List",
            element: <TodoList />,
        },
        {
            path: "/props",
            title: "Props",
            element: <LearnProps />,
        },
        {
            path: "/fetch-api",
            title: "Fetch API",
            element: <FetchApi />,
        },
        {
            path: "/blogs",
            title: "Blogs",
            element: <Home />,
        },
        {
            path: "/form",
            title: "Form",
            element: <Form />,
        },
        {
            path: "/users",
            title: "Users",
            element: <UserList />,
        },
    ];

    const myRoutes = routes.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
    ));

    return (
        <BrowserRouter>
            <Navbar routes={routes} />
            <Routes>{myRoutes}</Routes>
            <Routes>
                <Route path="/blogs/:id" element={<BlogDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
