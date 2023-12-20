import React, { useState } from 'react'
import './index.css'

const App = () => {
const[open,setOpen]=useState(false)
const[user,setUser]=useState({name:"", email:"", adress:""})
const[userData,setUserData]=useState([])
const[update,setUpdate]=useState(null)

function openModel(){
  setOpen(true)
}

function closeModel(){
  setOpen(false)
}

function adduser(){
  setUserData([...userData,user])
  closeModel()
}

function handleDelete(index){
  const del = userData.filter((v,i)=>i!==index)
  setUserData(del)
}

function updateData(index){
  openModel(true)
  setUser({...userData[index]})
  setUpdate(index)
}

function updated(){
  const updateRecorde = [...userData]

  updateRecorde[update]={...user}
  setUserData(updateRecorde)

  setUser({'name':"",'email':"",'adress':""})
  setUpdate(null)
  closeModel()
}
  return (
    <div className='Add'>
      <section className='sec'>
        <h1>Crud App</h1>
        <button className='btn' onClick={openModel}>Add User</button>
      </section>
      <hr />
      <center>
        <table border={1} rules='all'>
          <thead>
            <tr>
              <td><b>Name</b></td>
              <td><b>email</b></td>
              <td><b>adress</b></td>
              <td><b>Action</b></td>
            </tr>
          </thead>

          <tbody>
            {userData.length>0 && userData.map((user,index)=>{
              return(
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  
                  <td>{user.adress}</td>
                  <td>
                    <button onClick={()=>updateData(index)}>Edit</button>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={4}>@copyWrite SudeshGowda</td>
            </tr>
          </tfoot>
        </table>
      </center>

      {open&&(
        <form>
          <input type="text" placeholder='Enter Your Name' name='name' onChange={(e)=>setUser({...user,name:e.target.value})}/>
          <br /><br />
          <input type="email" placeholder='Enter Your email' name='email' onChange={(e)=>setUser({...user,email:e.target.value})}/>
          <br /><br />
          <input type="text" placeholder='Enter Your place' name='adress' onChange={(e)=>setUser({...user,adress:e.target.value})}/>
          <br /><br />
          {/* <button onClick={adduser}>Submit</button> */}
          {update===null ? (<button onClick={adduser}>Submit</button>):(<button onClick={updated}>Update</button>)}
        </form>
      )}

    </div>
  )
}

export default App
