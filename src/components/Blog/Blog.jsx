import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blogs }) => {
    return (
        <div>
            {blogs.map((blog) => {
                return (
                    <Link
                        to={`/blogs/${blog.id}`}
                        key={blog.id}
                        style={{ margin: "20px" }}
                    >
                        <p>{blog.title}</p>
                        <p>{blog.body}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default Blog;
