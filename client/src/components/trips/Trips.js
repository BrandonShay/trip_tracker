import { useState, useEffect } from 'react';
import axios from 'axios';
import TripForm from './TripForm';
import TopicList from './TripList';
import { useLocation, useParams } from 'react-router-dom';


const Trips = ({}) => {
  const [trips, setTrips] = useState([])
  const location = useLocation();
  const { userId, userEmail } = location.state



  useEffect( () => {
    axios.get(`/api/user/${userId}/trips`)
      .then( res => setTrips(res.data) )
      .catch( err => console.log(err))
  }, [])

  // create
  const addTrip = (trip) => {
    axios.post(`/api/users/${userId}/trips`, { trip })
    .then( res => setTrips([...trips, res.data]) )
    .catch( err => console.log(err))
  }

  // update 
  const updateTrip = (id, trip) => {
    axios.put(`/api/users/${userId}/trips/${id}`, { trip })
      .then( res => {
        const newUpdatedTrips = trips.map( t => {
          if (t.id === id) {
            return res.data 
          }
          return t
        })
        setTrips(newUpdatedTrips)
      })
      .catch( err => console.log(err))
  }

  // destroy
  const deleteTrip = (id) => {
    axios.delete(`/api/users/${userId}/trips/${id}`)
      .then( res => {
        setTrips( trips.filter( t => t.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <h1>user: {userEmail}</h1>
      <h3>Trips</h3>
      <TripForm addTrip={addTrip} />
      <TripList
        trips={trips}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    </>
  )
}

export default Trips;