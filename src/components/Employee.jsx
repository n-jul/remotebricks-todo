import React from "react";

const Employee = ({ firstName, lastName }) => {
  return (
    <div style={{ fontSize: 25 }}>
      {firstName} {lastName}
    </div>
  );
};

export default Employee;
