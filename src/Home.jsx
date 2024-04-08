import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UseReducer'
function Home() {
    const user=useSelector((state)=>state.users)
    console.log(user)
const dispatch=useDispatch()
    const HandleDelete=(id)=>{
     dispatch(deleteUser({id:id}))
    }
  return (
   <div className='container'>
    <h2>CRUD App with JSON Server</h2>
    <Link to='/create' className='btn btn-succes my-3'>Create +</Link>
    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
         {
            user.map((user,index)=>(
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                    <Link onClick={()=>HandleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</Link>
                </td>
              </tr>
            ))
         }
        </tbody>
    </table>
   </div>
  )
}

export default Home