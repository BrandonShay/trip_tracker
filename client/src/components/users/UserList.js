import User from './User';
const UserList = ({ users, updateUser, deleteUser }) => (
  <>
    {/* { subs.map( s => <Sub key={s.id} id={s.id} title={s.title} />)} */}
    { users.map( s =>
      <User
        key={s.id}
        {...s}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    )}
  </>
)
export default UserList;