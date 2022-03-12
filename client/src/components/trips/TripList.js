import Trip from './Trip';

const TripList = ({ trips, updateTrip }) => (
  <>
    { trips.map( t => 
      <Trip 
        key={t.id}
        
        {...t}
        updateTrip={updateTrip}
      />
    )}
  </>
)

export default TripList;