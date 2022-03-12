import { useState, useEffect } from 'react';

const LocationForm = ({ addLocation, id, loc_name, updateLocation, setEdit }) => {
  const [location, setLocation] = useState({ loc_name: '' })

  useEffect( () => {
    if (id) {
      setLocation({ loc_name })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateLocation(id, loc_name)
      setEdit(false)
    } else {
      addLocation(loc_name)
    }
    setLocation({ loc_name: ''})
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <input 
          location='loc_name'
          value={location.loc_name}
          onChange={(e) => setLocation({...location, loc_name: e.target.value })}
        />
       
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default LocationForm;