
import { Link } from 'react-router-dom';
import styles from '../assets/css/RoutesMap.module.css'

const RoutsMap = ({ currentPage, drivingRoutes }) => {

    return (
        <div className={styles.tableContainer}>
            <table>
                <tbody>
                    <tr>
                        <th>Vehicle Number</th>
                    </tr>
                    {(Object.keys(drivingRoutes)).slice((currentPage * 2 - 2), (currentPage * 2)).map((carNo) => {
                        return <tr key={carNo}><td><Link to={`/TripsHistory/${carNo}`} className={styles.carNo}>{carNo}</Link></td></tr>
                    })}
                </tbody>
            </table>
        </div>

    );
}
export default RoutsMap


