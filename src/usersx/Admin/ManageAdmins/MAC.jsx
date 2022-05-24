import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MAC = (props) => {
  const notify = () => toast.success("User Deleted ");
  const notify2 = () => toast.success("Admin Role Updated ");
  const handleDelete = (id) => {
    const isDelete = window.confirm(
      "Are you sure , you want to delete this user ?"
    );
    if (isDelete) {
      fetch(`https://project-101-doctor.herokuapp.com/users/${id}`, {
        method: "DELETE",
      });
      notify();
    }
  };
   const makeAdmin = (email) => {
    const isAdmin = window.confirm(
      "Are you sure , you want give admin role ?"
    );
    if (isAdmin) {
      fetch(`https://project-101-doctor.herokuapp.com/users/${email}`, {
        method: "PUT",
      });
      notify2();
    }
  };
  return (
    <>
      <ToastContainer />
      <tr>
        <td>{props.data.displayName}</td>
        <td>{props.data.email}</td>
        <td style={{ color: "green" }}>
          {props.data.role || <p style={{ color: "orange" }}>user</p>}
        </td>
        <th>
          <Button
            variant="outline-danger"
            onClick={() => {
              handleDelete(props.data._id);
            }}
          >
            Remove as Admin
          </Button>
           <Button
            disabled={props.data.role === "admin" ? true : false}
           className="ms-2"
            variant={props.data.role === "admin" ? "success" : "outline-success"}
            onClick={() => {
              makeAdmin(props.data.email);
            }}
          >
            Make Admin
          </Button>
        </th>
      </tr>
    </>
  );
};

export default MAC;
