import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import LocationForm from './LocationForm';
import LocatonList from './LocationList';

const Locations = () => {
  const { tripId } = useParams()
  const [locations, setLocations] = useState([])

  useEffect( () => {
    axios.get(`/api/trips/${tripId}/locations`)
      .then( res => setLocations(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addLocation = (location) => {
    axios.post(`/api/trips/${tripId}/locations`, { location })
      .then( res => setLocations([...locations, res.data]))
      .catch( err => console.log(err) )
  }

  const updateLocation = (id, location) => {
    axios.put(`/api/trips/${tripId}/locations/${id}`, { location })
      .then( res => {
        const newUpdatedLocations = locations.map( l => {
          if (l.id === id) {
            return res.data
          }
          return l
        })
        setLocations(newUpdatedLocations)
      })
      .catch( err => console.log(err) )
  }

  const deleteLocation = (id) => {
    axios.delete(`/api/trips/${tripId}/locations/${id}`)
      .then( res => {
        setLocations(locations.filter( l => l.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>Locations</h1>
      <LocationForm addLocation={addLocation} />
      <LocationList 
        locations={locations} 
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
      />
    </>
  )
}

export default Locations;