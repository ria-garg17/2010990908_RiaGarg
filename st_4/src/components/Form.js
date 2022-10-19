import React, {useEffect, useState} from 'react'
import './Form.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import JSONDATA from "./db.json";

// import {UserDashboard} from '../components/UserDashboard'

export const Form = () => {

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
        arrival: "",
        departure: "",
        bill: "",
    });

    const [updateData, setUpdateData] = useState({
        name: "",
        arrival: "",
        departure: "",
        bill: "",
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
            arrival: "",
            departure: "",
            bill: "",
        });
        getUser();
    };

    const handleDelete = async(seat) =>{
                await axios.delete('http://localhost:3000/posts/'+ seat)
                getUser();
     };

     const handleUpdate= async()=>{
        await axios
        .put(`http://localhost:3000/posts/${updateData.id}`, updateData)
        .then((res) => {
            getUser()
        });
     };
     const[query,setquery]=useState("....");

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h1 className='text-center' style={{marginLeft: '50%', textAlign: 'center'}}>CUSTOMER DETAILS</h1>
                {/* <h1 className='text-center' style={{marginLeft: '150%', marginTop: '-9%'}}>Search</h1> */}
            </div>
        </div>

        {/* <div className="search" style={{marginLeft: '81.5%', marginTop: '1%'}}>
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
        </div> */}

        <div style={{margin:"-4% 0% 5% 75%"}}>
            <div className="input-groupRounded">
                <input type="search" 
                    placeholder=" Search..."
                    onChange={(e)=>setquery(e.target.value ? e.target.value:"....")}
                    id="inp"
                    style={{width:"100%",height:"35px",borderRadius:"25px", textAlign: 'center'}}
                />
                <div id="ul" className="list">
                    {
                            JSONDATA.filter((user)=>
                            user.name.toLowerCase().includes(query) 
                            ) .map((user)=>(
                            <div style={{margin:"2% 0% 0% 0%"}} key={user.id} className="listItem">
                                <Link class="btn btn-dark" style={{borderColor: "#e7e7e7;color: black"}} to={`/users/${user.id}`}>
                                {user.name}
                                </Link>
                            </div>
                    ))
                        }
                </div>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src='https://img.freepik.com/free-vector/realistic-coffee-time-background-with-coffee-cup_79603-1559.jpg?w=2000' style={{width: '1520px', marginLeft: '-9%'}}></img>
            </div>
            <div className="mb-31" >
                {/* <label htmlFor="exampleFormControlInput1" className="form-label" style={{marginLeft: '-92%'}}>Username</label> */}
                <input type="text" style={{position: 'absolute', marginLeft: '42%', width: '38.5%'}} className="form-control" id="exampleFormControlInput1" value={formData.name} onChange={(e) => setFormData({... formData, name: e.target.value})} placeholder="Enter name" />
            </div>
            <div className="mb-31" >
                {/* <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label> */}
                <input style={{position: 'relative', marginLeft: '640px', marginTop: '-26%'}} type="text" className="form-control" id="exampleFormControlInput2" value={formData.arrival} onChange={(e) => setFormData({... formData, arrival: e.target.value})} placeholder="Enter arrival time"  />
            </div>
            <div className="mb-31" >
                {/* <label htmlFor="exampleFormControlInput3" className="form-label">Mobile Number</label> */}
                <input style={{position: 'relative', marginTop: '2%', marginLeft: '640px'}} type="text" className="form-control" id="exampleFormControlInput3" value={formData.departure} onChange={(e) => setFormData({... formData, departure: e.target.value})} placeholder="Enter deparure time"  />
            </div>
            <div className="mb-31" >
                {/* <label htmlFor="exampleFormControlInput4" className="form-label">Password</label> */}
                <input style={{position: 'relative', marginTop: '2%', marginLeft: '640px'}} type="text" className="form-control" id="exampleFormControlInput4" value={formData.bill} onChange={(e) => setFormData({... formData, bill: e.target.value})} placeholder="Total bill"  />
            </div>
            
            <div className="mb-31" >
                <button style={{position: 'relative', marginLeft: '45%', backgroundColor: 'blue'}} className="btn btn-success" onClick={handleFormSubmit}>Add User</button>
            </div>{" "} 
        </div>
        
        <div>
            <h1 style={{paddingBottom: '2%'}}>CUSTOMER DATA</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                    <th scope="col">Seat Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Arrival Time</th>
                    <th scope="col">Departure Time</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((user) => (
                            <tr>
                                <th scope="row" key={user.id}>{user.id}</th>
                                <td key={user.name}>{user.name}</td>
                                <td key={user.arrival}>{user.arrival}</td>
                                <td key={user.departure}>{user.departure}</td>
                                <td style={{display:"flex", justifyContent: "space-between"}}>
                                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                                    View
                                </Link>
                                    <button className="btn btn-info" onClick={()=>{handleShow();setUpdateData({
                                        name: user.name,
                                        arrival: user.arrival,
                                        departure: user.departure,
                                        bill: user.bill,
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
            <label htmlFor="exampleFormControlInput2" className="form-label">Arrival Time</label>
            <input type="text" className="form-control" id="exampleFormControlInput2" value={updateData.arrival} onChange={(e) => setUpdateData({... updateData, arrival: e.target.value})} placeholder="Enter arrival time" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">Departure Time</label>
            <input type="text" className="form-control" id="exampleFormControlInput3" value={updateData.departure} onChange={(e) => setUpdateData({... updateData, departure: e.target.value})} placeholder="Enter departure time" />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput4" className="form-label">Total Bill</label>
            <input type="text" className="form-control" id="exampleFormControlInput4" value={updateData.bill} onChange={(e) => setUpdateData({... updateData, bill: e.target.value})} placeholder="Enter bill" />
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


