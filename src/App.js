import { React, useEffect, useState } from 'react'
import UserForm from './composants/UserForm';
import UserLIst from './composants/UserLIst';
const users = [
  { id: 1, nom: 'jouali', status: false },
  { id: 2, nom: 'baba', status: true },
  { id: 3, nom: 'montassir', status: false },
  { id: 4, nom: 'tikki', status: true }
]
const key='react.users'
const App = () => {
  const [personnes, setPersonnes] = useState(users)
  useEffect(()=>{
    const usersFromLocalStorage=localStorage.getItem(key)
    if (usersFromLocalStorage){
      setPersonnes(JSON.parse(usersFromLocalStorage))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(personnes))
  },[personnes])
  const handleStatusChange = (id) => {
    const userModify = personnes.find(user => user.id === id)
    userModify.status = !userModify.status
    const newUsers = personnes.map(user => user.id === id ? userModify : user)
    setPersonnes(newUsers)
  }
  const handleUserCreate = (nom) => {
    const newUser = { id: new Date().getTime(), nom, status: false }
    setPersonnes([newUser, ...personnes])
  }
  const handleDelete = (id)=>{
    const result = window.confirm(`voulez vous supprimer user ayant id ${id}`)
    if(result){
          setPersonnes(personnes.filter(user=>user.id !== id))
    }
  }
  return (
    <>
      <h2>Liste des eleves</h2>
      <UserForm handleUserCreate={handleUserCreate} />
      <UserLIst
        personnes={personnes}
        handleStatusChange={handleStatusChange}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
