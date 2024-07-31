import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom' 


function Create() {
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    const [email , setEmail] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('https://668e3fa8bf9912d4c92d68bf.mockapi.io/crud', {
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
            <h1>Create data</h1>
        </div><br/>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Enter Name :  </label>
                    <input type='text' placeholder='Name' className='form-controll' onChange={(e) => setName(e.target.value)}></input>
                </div>
                <br/>
                <div className='form-group'>
                    <label>Enter Age :  </label>
                    <input type='text' placeholder='Age' className='form-controll' onChange={(e) => setAge(e.target.value)}></input>
                </div>
                <br/>
                <div className='form-group'>
                    <label>Enter Email :  </label>
                    <input type='text' placeholder='Email' className='form-controll' onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <br/>
                <div className='d-grid'>
                <input type='Submit' value='Submit' className='btn btn-primary'/>
                </div>
            </form>
            {name}
            <br/>
            {age}
            <br/>
            {email}
        </div>
    </div>


    </>
  )
}

export default Create
