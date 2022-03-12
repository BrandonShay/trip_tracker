import { useState, useEffect } from 'react';

const TripForm = ({ addTrip, id, name, updateTrip }) => {
  const [trip, setTrip] = useState({ name: ''})

  useEffect( () => {
    if (id) {
      setTrip({ name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTrip(id, trip)
      setTrip(false)
    } else {
      addTrip(trip)
    }
    setTrip({ name: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          
          name="name" 
          value={trip.name}
          onChange={(e) => setTrip({ ...trip, name: e.target.value })}
          required
          placeholder='name'
        />
        
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TripForm;