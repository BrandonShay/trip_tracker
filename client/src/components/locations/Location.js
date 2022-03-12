import { useState } from 'react';
import LocationForm from './LocationForm';

const Location = ({ id, loc_name, updateLocation, deleteLocation }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>  
            <LocationForm 
              id={id}
              loc_name={loc_name}
              updateLocation={updateLocation}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        : 
        <>
          <h1>Author: {author}</h1>
          <p>Message: {body}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteLocation(id)}>Delete</button>
        </>
      }
      
    </>
  )
}

export default Location;