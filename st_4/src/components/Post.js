import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {arr} from './PostForm';

const parentDiv = {
	align: 'center',
	margin: '0px auto auto auto',
	textAlign: 'center',
	overflowX: 'hidden',
}

const heading={
	fontSize:"50px",
	// margin:20,
	// borderBottom:'2px solid lightgrey'
}

const galleryStyle ={
	textDecoration: 'none',
	border: 'none',
	margin: '60px 60px 0px 50px',
	color: '#fff',
	fontWeight: 'bold',
	padding: '16px 20px',
	position: 'absolute',
	top: '35px',
	right: '200px',
	background: '#7bc74d',
	borderRadius:'12px',
	marginTop: '7%'
}

function Post() {
return (
	<>
	<div style={parentDiv}>
	<h1 style={heading}>All Posts</h1>
	<div style={{  margin: '0px auto'}}>
        <Link to='/picture' style={galleryStyle}>Back</Link>
		<table >
			<tbody>
				{(arr.map((a)=>(
						<tc key={`${a}`}>
							<img src={localStorage.getItem(a)} style={{marginTop: '4%', paddingLeft: '1%', marginLeft: '0%', marginBottom: '2%'}} width="350px" height="250px"/>
						</tc>
				)))}
			</tbody>
		</table>
	</div>
	</div>
	</>
);

}

export default Post;