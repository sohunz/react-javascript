import React, { useState } from "react";
import Blogs from "./Blogs";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "blog 1", body: "body 1" },
        { id: 2, title: "blog 2", body: "body 2" },
        { id: 3, title: "blog 3", body: "body 3" },
    ]);

    return <Blogs blogs={blogs} />;
};

export default Home;
