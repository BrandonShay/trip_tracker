import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Users from './components/users/Users';
import Locations from './components/locations/Locations';
import Trips from './components/trips/Trips';
// for navigation routes
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/users" element={ <Users /> } />
      <Route path="/users/:userId/trips" element={ <Trips /> } />
      <Route path="/trips/:tripId/locations" element={ <Locations /> } />
      <Route path="*" element={ <Nomatch /> } />
    </Routes>
    {/* This is where your footer will be */}
  </>
)
export default App;