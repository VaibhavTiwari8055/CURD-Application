import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Update() {

    const [id, setId] = useState(0)
    const [name, setName] = useState(0)
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState(0)
    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    },[])

    const handleUpdate = (e) =>  {
        e.preventDefault();
        axios.put(`https://668e3fa8bf9912d4c92d68bf.mockapi.io/crud/${id}`,{
            e_name: name,
            e_age: age,
            e_email: email
        }).then(()=>{
            navigate('/')
        }).catch((error)=>{
              console.log(error)
        });

    }
  return (
    <>
    <div className="row">
        <div className='col-md-4'>
        <div className='mb-2 mt-2'>
            <Link to='/'>
            <button className='btn btn-primary'> Read Data</button>
            </Link>
        </div>
        <div className='bg-primary p-4 text-center'>
            <h1>Update data</h1>
        </div><br/>
            <form onSubmit={handleUpdate}>
                <div className='form-group'>
                    <label>Enter Name :  </label>
                    <input type='text' placeholder='Name' value={name} onChange={(e)=> setName(e.target.value)} className='form-controll'></input>
                </div>
                <br/>
                <div className='form-group'>
                    <label>Enter Age :  </label>
                    <input type='text' placeholder='Age' value={age} onChange={(e)=> setAge(e.target.value)} className='form-controll'></input>
                </div>
                <br/>
                <div className='form-group'>
                    <label>Enter Email :  </label>
                    <input type='text' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className='form-controll'></input>
                </div>
                <br/>
                <div className='d-grid'>
                <input type='Submit' value='Submit' className='btn btn-primary'/>
                </div>
            </form>
        </div>
    </div>


    </>
  )
}

export default Update
