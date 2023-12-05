// import { useEffect, useState } from "react";
// import { Link, useLoaderData } from "react-router-dom";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
// import { useState } from "react";


const Home = () => {


    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])

    // const loadedseeUsers = useLoaderData();
    // const [seeUsers, setUsers] = useState(loadedseeUsers)

    // const handleAddUser = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const user = { name, email };
    //     console.log(user);

    //     fetch('http://localhost:5000/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('Port is hiting', data);
    //             // const newUsers = [...users, data];
    //             // setUsers(newUsers);
    //             if (data.insertedId) {
    //                 alert('Succesfully Done');
    //             }
    //             form.reset();
    //         })


    // }

    // const handleDelete = userId => {
    //     console.log(userId);
    //     fetch(`http://localhost:5000/users/${userId}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {
    //                 alert('Deleted Successfuly');
    //                 const remaining = seeUsers.filter(user => user._id !== userId);
    //                 setUsers(remaining);
    //             }
    //         })


    // }



    return (
        <div>
            {/* <form onSubmit={handleAddUser}>
                <input type="text" name="name" /> <br />
                <input type="email" name="email" /> <br />
                <input type="submit" name="user" /><br />
            </form>

            <h3>Total Users : {seeUsers.length}</h3>
            {
                seeUsers.map(user => <p key={user._id}>{user.id}:{user.name} + {user.email}
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(user._id)}>X</button></p>)
            } */}
            <Banner></Banner>
            <About></About>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;