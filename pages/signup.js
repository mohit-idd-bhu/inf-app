import React, { useState } from 'react';

function SignUp(props) {
    const [data,dataChangeHandler]=useState({name:'',email:'',date:'',password:''});
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data);
        const new_data={name:'',email:'',date:'',password:''};
        dataChangeHandler(new_data);
        fetch("api/user-registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
        .then((response) =>{
            if(response.ok) return response.json();
        })
        .then(response=>console.log(response))
        .catch((error) => {
            console.error("Error:", error);
            alert('User cannot be added');
        });
        const reset={name:'',email:'',date:'',password:''};
        dataChangeHandler(reset);
    }
    const keyStrokeHandler=()=>{
        const e1=document.getElementById('name');
        const e2=document.getElementById('email');
        const e3=document.getElementById('date');
        const e4=document.getElementById('password');
        dataChangeHandler(prevState=>({
            ...prevState,
            name: e1.value,
            email: e2.value,
            date : e3.value,
            password: e4.value
        }));
    }
    return ( 
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" placeholder='enter name' onChange={keyStrokeHandler} id='name' value={data.name}/>
            <label>E-Mail</label>
            <input type="email" placeholder='enter E-mail' onChange={keyStrokeHandler} id='email' value={data.email}/>
            <label>Date of Birth</label>
            <input type="date" placeholder='enter DoB'onChange={keyStrokeHandler} id='date' value={data.date}/>
            <label>Password</label>
            <input type="password" placeholder='enter Password' onChange={keyStrokeHandler} id='password' value={data.password}/>
            <button type='submit'>submit</button>
        </form>
     );
}

export default SignUp;