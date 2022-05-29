import Home from './components/Home'
import TripsHistory from './components/TripsHistory';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useCarRoutes } from './Hooks/useCarRoutes'
function App() {

  const drivingRoutes = useCarRoutes();

  return (
    <Routes>
      <Route path='/' element={<Navigate replace to="home" />} />
      <Route path='/home' element={<Home drivingRoutes={drivingRoutes} />} />
      <Route path='/tripshistory/:carPlate' element={<TripsHistory drivingRoutes={drivingRoutes} />} />
    </Routes>
  );
}

export default App;
