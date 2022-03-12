import { useState } from 'react';
import UserForm from './UserForm';
import Trips from '../trips';
import { Link } from 'react-router-dom';
const User = ({ id, email, updateUser, deleteUser }) => {
  const [editing, setEdit] = useState(false)
  return (
    <>
        <>
          <UserForm
            id={id}
            email={email}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button
            onClick={() => setEdit(true)}
            style={styles.btn}
          >
            Edit
          </button>
          <button
            onClick={() => deleteUser(id)}
            style={styles.deleteBtn}
          >
            Delete
          </button>
          {/* <Topics subId={id} /> */}
          <Link
            to={`/users/${id}/trips`}
            state={{ userId: id }}
          >
            Trips
          </Link>
        </>
    </>
  )
}
// styling as a module
// const styles = {
//   btn: {
//     background: 'yellow',
//     color: 'orange',
//     fontSize: '12px',
//     borderRadius: '10px',
//   },
//   deleteBtn: {
//     background: 'red',
//     color: 'white',
//     fontSize: '12px',
//     borderRadius: '5px',
//   }
// }
export default User;