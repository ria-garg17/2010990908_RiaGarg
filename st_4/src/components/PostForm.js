import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const galleryStyle ={
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
const postBtnStyle = {
	position: 'relative',
	border: 'none',
	margin: 0,
	color: '#fff',
	fontWeight: 'bold',
	padding: '16px 20px',
	background: '#7D4C92 ',
	width: '417px',
	borderRadius:'12px',
	opacity: '1',
}
const parentDiv = {
	align: 'center',
	margin: '0px auto auto auto',
	textAlign: 'center',
}
const formStyle = {
	width: '600px',
	height:'200px',
	border: '2px solid gray',
	margin: '10px auto 10px auto',
	textAlign: 'center',
	padding: '30px 40px 30px 40px',
	borderRadius:'12px',
	position: 'relative',
}
const inputFields = {
	width: '100%',
	height:'50px',
	fontFamily: 'arial',
	// padding: '6px',
	textAlign:"center",
	borderRadius:'10px',
	border:'1.5px solid grey',
	opacity: '1',
	position: 'relative',
}

const image = {
	opacity: '0.3', 
	width: '1535px',
	height: '645px'
}
var get =localStorage.getItem(-1);
var arr=[];
var a=0;
if(get!=null){
  for(let i=0;i<=get;i++){
    arr[i]=i;
  }
  a=get;
  ++a;
}

class PostForm extends Component {
handleSubmit = (e) => {
	e.preventDefault();
	const image = this.getImage.value;
	localStorage.setItem(a, image);
	this.getImage.value = '';
  localStorage.setItem(-1,a);
  arr.push(a);
  ++a;
}
render() {
return (
	<div style={parentDiv}>
		<img src='https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/24115640/Untitled-design-2022-02-18T123717.280.jpg' style={image}></img>
	<h1 style={{color:'#7D4C92',marginTop:'-42%', position: 'relative', opacity: '1'}}><b>Pics</b>
	<span style={{color:'#248A6E'}}><b>Villa</b></span>
	</h1>
	
<p style={{position: 'relative'}}><b>One place stop for all kinds of images</b></p>
	{/* <hr style={{color: 'black', position: 'relative', border:'5px solid black'}}></hr> */}
	<h3 style={{marginTop: '7%', position: 'relative'}}>Create a new Post</h3>
	<form onSubmit={this.handleSubmit} style={formStyle}>
		<input style={inputFields} required type="text"
		placeholder="Paste your image url here"
		ref={(input) => this.getImage = input}
		/><br></br>
		<br></br>
		<button style={postBtnStyle}>Post</button>
	</form>
	<Link to='/post'>
		<button style={galleryStyle}>
		View Gallery
		</button>
	</Link>

	</div>
);
}
}
export {PostForm ,arr};
