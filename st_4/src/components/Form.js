import React, {useEffect, useState} from 'react'
import './Form.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import JSONDATA from "./db.json";

// import {UserDashboard} from '../components/UserDashboard'

export const Form = () => {
const [searchTerm, setSearchTerm] = useState('')

const [data, setData] = useState([{}]);

useEffect(() => {
    getUser();
    console.log(data);
}, []);

const getUser = async()=>{
    await axios.get('http://localhost:3000/posts').then(res=> setData(res.data));
};

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });

    const [updateData, setUpdateData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        id: ""
    });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = async(e)=>{
        let response = await axios.post('http://localhost:3000/posts',formData)
        
        // if(response)
        //     alert("Data submitted successfully");
        // else   
        //     alert("Something went wrong");

        setFormData({
            name: "",
            email: "",
            mobile: "",
            password: "",
        });
        getUser();
    };

    const handleDelete = async(id) =>{
                await axios.delete('http://localhost:3000/posts/'+ id)
                getUser();
     };

     const handleUpdate= async()=>{
        await axios
        .put(`http://localhost:3000/posts/${updateData.id}`, updateData)
        .then((res) => {
            getUser()
        });
     };

  return (
    <div className="container" >
        <div className="row">
            <div className="col-md-7">
                <h1 className='text-center' style={{marginLeft: '22%'}}>FORM</h1>
                <h1 className='text-center' style={{marginLeft: '150%', marginTop: '-9%'}}>Search</h1>
            </div>
        </div>

        <div className="search" style={{marginLeft: '81.5%', marginTop: '1%'}}>
            <input id='search-bar' type="text" placeholder="Search..." style={{textAlign: 'center', backgroundColor: '#16213E', color: 'white', borderRadius: '25px', width: '110%'}} onChange={event => {setSearchTerm(event.target.value)}}></input>
            {
                JSONDATA.filter((val)=>{
                    if(searchTerm=="")
                        return val;
                    else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()))
                         return val;
                }).map((val,key) => {
                    return <div style={{paddingTop: '5%'}}>{val.name}</div>
                })
            }
        </div>
    
        <div className="mb-3" style={{width: '70%', marginTop: '-6%'}}>
            {/* <label htmlFor="exampleFormControlInput1" className="form-label" style={{marginLeft: '-92%'}}>Username</label> */}
            <input type="text" className="form-control" id="exampleFormControlInput1" value={formData.name} onChange={(e) => setFormData({... formData, name: e.target.value})} placeholder="Enter name" style={{textAlign: 'center', backgroundColor: '#16213E', color: 'white', borderRadius: '25px'}}/>
        </div>
        <div className="mb-3" style={{width: '70%'}}>
            {/* <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label> */}
            <input type="email" className="form-control" id="exampleFormControlInput2" value={formData.email} onChange={(e) => setFormData({... formData, email: e.target.value})} placeholder="Enter email" style={{textAlign: 'center', backgroundColor: '#16213E', color: 'white', borderRadius: '25px'}} />
        </div>
        <div className="mb-3" style={{width: '70%'}}>
            {/* <label htmlFor="exampleFormControlInput3" className="form-label">Mobile Number</label> */}
            <input type="number" className="form-control" id="exampleFormControlInput3" value={formData.mobile} onChange={(e) => setFormData({... formData, mobile: e.target.value})} placeholder="Enter number" style={{textAlign: 'center', backgroundColor: '#16213E', color: 'white', borderRadius: '25px'}} />
        </div>
        <div className="mb-3" style={{width: '70%'}}>
            {/* <label htmlFor="exampleFormControlInput4" className="form-label">Password</label> */}
            <input type="password" className="form-control" id="exampleFormControlInput4" value={formData.password} onChange={(e) => setFormData({... formData, password: e.target.value})} placeholder="Enter password" style={{textAlign: 'center', backgroundColor: '#16213E', color: 'white', borderRadius: '25px'}} />
        </div>
        
        <div className="mb-3" style={{marginLeft: '-30%', paddingTop: '1%'}}>
            <button className="btn btn-success" onClick={handleFormSubmit}>Add User</button>
        </div>{" "} 
        <div>
            <h1>User Dashboard</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user) => (
                            <tr>
                                <th scope="row" key={user.id}>{user.id}</th>
                                <td key={user.name}>{user.name}</td>
                                <td key={user.email}>{user.email}</td>
                                <td key={user.mobile}>{user.mobile}</td>
                                <td style={{display:"flex", justifyContent: "space-between"}}>
                                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                    View
                                </Link>
                                    <button className="btn btn-info" onClick={()=>{handleShow();setUpdateData({
                                        name: user.name,
                                        email: user.email,
                                        mobile: user.mobile,
                                        password: user.password,
                                        id: user.id
                                    })}}>
                                        Edit
                                    </button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={updateData.name} onChange={(e) => setUpdateData({... updateData, name: e.target.value})} placeholder="Enter name" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput2" value={updateData.email} onChange={(e) => setUpdateData({... updateData, email: e.target.value})} placeholder="Enter email" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">Mobile Number</label>
            <input type="number" className="form-control" id="exampleFormControlInput3" value={updateData.mobile} onChange={(e) => setUpdateData({... updateData, mobile: e.target.value})} placeholder="Enter number" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput4" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput4" value={updateData.password} onChange={(e) => setUpdateData({... updateData, password: e.target.value})} placeholder="Enter password" />
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose(); handleUpdate()}}>
            Update User
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


