import { useState, useEffect } from 'react';
const UserForm = ({ addUser, id, email, updateUser, setEdit }) => {
  const [user, setUser] = useState({ email: '' })
  // prepop the form
  useEffect( () => {
    if (id) {
      // setUser({ email: email })
      setUser({ email })
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      // for updating a user
      updateUser(id, user)
      setEdit(false)
    } else {
      // for creating a user
      // { email: 'Food' }
      addUser(user)
    }
    // clearing out the form
    setUser({ email: '' })
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input
          name='email'
          value={user.email}
          onChange={ (e) => setUser({ ...user, email: e.target.value })}
          placeholder='Email'
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default UserForm;