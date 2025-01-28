import React, { useState } from "react";
import "./UserForm.css";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  // const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { firstName, lastName, email, department };
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        alert("User added successfully");
        navigate("/");
      })
      .catch((error) => console.error("Error:", error.message));
  };

  return (
    <>
      <h2>Add User Details</h2>
      <form className="container" onSubmit={handleSubmit}>
        <div className="formContainer">
          {/* <div className="inputLabelContainer">
            <label htmlFor="firstName">ID: </label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="ID"
              value={id}
              onChange={(event) => setId(event.target.value)}
            />
          </div> */}
          <div className="inputLabelContainer">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="inputLabelContainer">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <div className="inputLabelContainer">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="inputLabelContainer">
            <label htmlFor="department">Department: </label>
            <input
              type="text"
              name="department"
              id="department"
              placeholder="Department"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            />
          </div>
          <button>Add</button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
