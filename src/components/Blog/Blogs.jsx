import React from "react";
import Blog from "./Blog";

const Blogs = ({ blogs }) => {
    return (
        <div>
            <Blog blogs={blogs} />
        </div>
    );
};

export default Blogs;
