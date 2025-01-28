import React, { useEffect, useState } from "react";
import "./UserList.css";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const API_URL = "http://localhost:8000/users";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch users.");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const editUserDetails = (id) => {
    navigate("/editUser/" + id);
  };

  const removeUserDetails = (id) => {
    fetch("http://localhost:8000/users/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        alert("User removed successfully");
        window.location.reload();
      })
      .catch((error) => console.error("Error:", error.message));
  };

  return (
    <>
      <h2>Users List</h2>
      <div className="btnContainer">
        <Link to="/addUser" className="btn addBtn">
          Add new user
        </Link>
      </div>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
                <td>
                  <button
                    className="btn editBtn"
                    onClick={() => editUserDetails(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeUserDetails(user.id)}
                    className="btn deleteBtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
