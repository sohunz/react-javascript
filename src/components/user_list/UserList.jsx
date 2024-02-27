import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
    const [comment, setComment] = useState([]);
    const [post, setPost] = useState([]);
    const [profile, setProfile] = useState("");

    const getUserList = async () => {
        await axios({
            url: "https://my-json-server.typicode.com/typicode/demo/db",
            method: "get",
            data: "",
        })
            .then((res) => {
                setComment(res.data.comments);
                setPost(res.data.posts);
                setProfile(res.data.profile);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div>
            <p>comment</p>
            {comment.map((item) => (
                <p key={item.id}>{item.body}</p>
            ))}
            <hr />
            <p>Post</p>
            {post.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
            <hr />
            <p>profile</p>
            {profile.name}
        </div>
    );
};

export default UserList;
