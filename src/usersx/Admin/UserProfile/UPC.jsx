import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UPC = (props) => {
  const notify = () => toast.success("User Deleted ");
  const handleDelete = (id) => {
    const isDelete = window.confirm(
      "Are you sure , you want to Delete this user ?"
    );
    if (isDelete) {
      fetch(`https://project-101-doctor.herokuapp.com/reg-user-info/${id}`, {
        method: "DELETE",
      });
      notify();
    }
  };
  return (
    <>
      <ToastContainer />
      <tr>
        <td>{props.data._id}</td>
        <td>{props.data.displayName}</td>
        <td>{props.data.mail}</td>
        <td>{props.data.Age}</td>
        <td>{props.data.contact}</td>
        <th>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(props.data._id);
            }}
          >
            Delete User
          </Button>
        </th>
      </tr>
    </>
  );
};

export default UPC;
