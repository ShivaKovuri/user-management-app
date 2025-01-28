import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  // const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/users/" + userId)
      .then((response) => response.json())
      .then((data) => {
        // setId(data.id);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setDepartment(data.department);
      })
      .catch((error) => console.error("Error:", error.message));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { firstName, lastName, email, department };
    fetch("http://localhost:8000/users/" + userId, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        alert("User details updated successfully");
        navigate("/");
      })
      .catch((error) => console.error("Error:", error.message));
  };

  return (
    <>
      <h2>Update User Details</h2>
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
          <button>Update</button>
        </div>
      </form>
    </>
  );
};

export default UserEdit;
