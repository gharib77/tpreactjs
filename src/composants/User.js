import React from 'react'

const User = (props) => {
  return (
    <>
      <input
        type="checkbox"
        checked={props.user.status}
        onChange={() => props.handleStatusChange(props.user.id)}
      />
      <div>{props.user.nom} {props.user.status ? "connecté" : "disconnecté"} <button onClick={()=>props.handleDelete(props.user.id)}>X</button></div>
    </>
  )
}

export default User
