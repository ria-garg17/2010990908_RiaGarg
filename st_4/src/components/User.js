import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export const User = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3000/posts/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/form">
        Back to Form
      </Link>
      <h1 className="display-4">Seat Number: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item" style={{textAlign: 'left'}}><b>Name:</b> {user.name}</li>
        <li className="list-group-item" style={{textAlign: 'left'}}><b>Arrival Time:</b> {user.arrival}</li>
        <li className="list-group-item" style={{textAlign: 'left'}}><b>Departure Time:</b> {user.departure}</li>
        <li className="list-group-item" style={{textAlign: 'left'}}><b>Total Bill:</b> {user.bill}</li>
      </ul>
    </div>
  );
};
