import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { useState } from 'react'
import { updateUser } from './UseReducer'
import {useNavigate} from 'react-router-dom'


function Update() {
    const {id}=useParams()
    const user=useSelector((state)=>state.users)
    const existingUser=user.filter(f=>f.id==id)
    const {name,email}=existingUser[0]
const dispatch=useDispatch()
    const [uname,setName]=useState(name)
    const [uemail,setEmail]=useState(email)
const navigate=useNavigate()
    const HandleUpdate=(e)=>{
  e.preventDefault()
  
  dispatch(updateUser({
    id:id,
    name:uname,
    email:uemail
  }))
  navigate("/")
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={HandleUpdate}>
            <div>
                <label>Name:</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Your Name' value={uname} onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div>
                <label>Email:</label>
                <input type="email" name='email' className='form-control' placeholder='Enter Your Email' value={uemail} onChange={(e)=>setEmail(e.target.value)}  />
            </div>
            <br />
            <button className='btn btn-info'>Update</button>
        </form>
    </div>
</div>
  )
}

export default Update