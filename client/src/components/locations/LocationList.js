import Location from './Location';

const LocationList = ({ locations }) => (
  <>
    { locations.map( c => 
      <Location 
        key={c.id}
        {...c}
      />
    )}
  </>
)

export default LocationList;