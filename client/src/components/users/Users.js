import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserList from './UserList';
const Users = () => {
  const [users, setUsers] = useState([])
  useEffect( () => {
    // make a call to our rails to grab all items
    axios.get('/api/users')
      .then( res => {
        // update the state with the items from the database
        setUsers(res.data)
      })
      .catch( err => console.log(err) )
  }, [])
          // { title: 'Food' }
  const addUser = (user) => {
    // TODO make a call to our rails to create the item using the params
                    // { sub: { title: 'Food' }}
    axios.post('/api/users', { user })
      .then( res => {
        // add the new sub in our state
        setUsers([...users, res.data ])
      })
      .catch( err => console.log(err) )
  }
  const updateUser = (id, user) => {
    // TODO make a call to our rails to updating the item using the params
    axios.put(`/api/users/${id}`, { user })
    // TODO update the state
      .then( res => {
        const newUpdatedUsers = users.map( u => {
          if (u.id === id) {
            return res.data
          }
          return u
        })
        setUsers(newUpdatedUsers)
      })
      .catch( err => console.log(err) )
  }
  const deleteUser = (id) => {
    // TODO make a call to our rails to delete the item
    axios.delete(`/api/users/${id}`)
      .then(res => {
        // TODO delete item in the state, display message
        setUsers(users.filter( u => u.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }
  return(
    <>
      <h1>Users</h1>
      <UserForm addUser={addUser} />
      <UserList
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </>
  )
}
export default Users;