import Vehicles from './Vehicles';
const Home = ({ drivingRoutes }) => {
    return (
        <div>
            <div>
                <Vehicles drivingRoutes={drivingRoutes} />
            </div>
        </div>);
}
export default Home