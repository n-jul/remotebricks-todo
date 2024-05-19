import React, { useState, useEffect } from "react";
import axios from "axios";
import Employee from "./Employee";
const Employees = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async (numOfUsers) => {
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${numOfUsers}`
        );
        setUsers(response.data.results);
        console.log(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Fetch 5 users
    fetchUsers(15);
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: 50 }}>Employees List:</h1>
      {users.map((users, index) => (
        <Employee
          key={index}
          firstName={users.name.first}
          lastName={users.name.last}
        />
      ))}
    </div>
  );
};

export default Employees;
