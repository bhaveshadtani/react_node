import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:4000/user';
// const DELETE_URL = 'http://localhost:4000/deleteUser';

const Dashboard = () => {

    // const navigate = useNavigate();
    const [Data, setData] = useState([]);

    const deleteButton = (id) => {
        axios.delete(API_URL + '/' + id)
            .then((ress) => {
                window.location.reload();
            })
            .catch((err) => {
                console.log("delete err :: ", err);
            })
    }

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                if (response.status == 200) {
                    console.log("Success Data :: ", response.data.data)
                    setData(response.data.data);
                }
                else {
                    console.log("not found");
                }
            })
            .catch(error => console.error(error));
    }, [])
    console.log("Data :: ", Data);
    return (
        <div>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((item) =>
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td><button onClick={() => deleteButton(item._id)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
