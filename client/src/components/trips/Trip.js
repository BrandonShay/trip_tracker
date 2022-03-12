import { useState } from 'react';
import TripForm from './TripForm';
import { Link } from 'react-router-dom';


const Trip = ({ id, name,  updateTrip, deleteTrip }) => {
  const [editing, setTrip] = useState(false)

  return(
    <>
      {
        editing ?
          <>
            <TripForm
              id={id}
              name={name}
              
              updateTrip={updateTrip}
              setTrip={setTrip}
            />
            <button onClick={() => setTrip(false)}>Cancel</button>
          </>
        :
        <>
          <h1>Name: {name}</h1>
          
          
          <button onClick={() => setTrip(true)}>Edit</button>
          <button onClick={() => deleteTrip(id)}>Delete</button>
          <Link to={`/trips/${id}/locations`}>
            <button>
              go to Locations
            </button>
          </Link>
        </>
      }
    </>
  )
}

export default Trip;