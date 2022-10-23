import React from 'react'
import User from './User'

const UserLIst = (props) => {
  return (
    <>
      {props.personnes.map(user => (
        <User
          key={user.id}
          user={user}
          handleStatusChange={props.handleStatusChange} handleDelete={props.handleDelete} />
      ))}
    </>
  )
}

export default UserLIst
