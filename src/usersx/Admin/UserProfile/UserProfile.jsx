import React from "react";
import {  Table } from "react-bootstrap";
import UPC from "./UPC";
import {useState,useEffect} from "react";
import axios from "axios";

const UserProfile = () => {
 const [users,setUsers] = useState([]);
 useEffect(()=>{
    axios.get('https://project-101-doctor.herokuapp.com/reg-user-info')
    .then(data => setUsers(data.data));
 },[users]);
  return (
    <div>
        <h2 className="mt-5 text-center">User Profile & Management</h2>
      <Table striped bordered hover className="w-75 text-center mx-auto mt-5">
        <thead>
          <tr>
            <th>UID</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map(data => <UPC key={data._id} data={data}></UPC>)
            }
        </tbody>
      </Table>
    </div>
  );
};

export default UserProfile;
