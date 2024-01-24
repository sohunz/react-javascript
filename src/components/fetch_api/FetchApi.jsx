import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const URL = 'https://jsonplaceholder.typicode.com/users';

const FetchApi = () => {
    const [users, setUsers] = useState([]);

    // using fetch() no async await

    // fetch(URL)
    // .then((response) => response.json())
    // .then((data) => console.log(data))



    // using fetch with async await

    // const getData = async() => {
    //     const response = await fetch(URL)
    //     const result = await response.json()
    //     console.log(result);
    // }
    // getData()



    // using axios no async await

    // axios.get(URL)
    // .then((response) => console.log(response.data))



    // using axios with async await
    const getData = async () => {
        const response = await axios.get(URL)
        console.log(response.data);
        setUsers(response.data)
    }

    useEffect(() => {
        getData()
    },[])


    return (
        <div>
            <p>Fetch API</p>
            {users.map((user) => {
                return(
                    <div key={user.id} style={{border: '1px solid black'}}>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default FetchApi;
