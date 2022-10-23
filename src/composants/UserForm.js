import React, { useState } from 'react'

const UserForm = ({handleUserCreate}) => {
  const [nom,setNom]=useState('')
  const handleSubmitForm = (e)=>{
    e.preventDefault()
    handleUserCreate(nom)
    setNom("")
  }
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input type="text"  name="nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
        <button>Add User</button>
      </form>
    </>
  )
}

export default UserForm
