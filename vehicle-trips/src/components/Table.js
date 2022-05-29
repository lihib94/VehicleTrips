import styles from '../assets/css/Table.module.css'
import { useParams } from "react-router-dom";
import calcDistance from '../Functions/distance'

const Table = ({ setPoints, drivingRoutes, currentPage }) => {

    //params holds specific car plate
    const params = useParams();
    //routes amount of a car (28)
    const carRoutes = drivingRoutes[params.carPlate]

    return (
        <div className={styles.tableContainer}>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Odometer</th>
                        <th>Info</th>
                    </tr>
                    {Object.keys(carRoutes).slice((currentPage * 7 - 7), (currentPage * 7)).map((indx) => {
                        const day = +indx + 1 //  +1 because indx starts with 0
                        var distance = calcDistance(carRoutes[indx])
                        if (distance < 1) {//if dist < 1km show only 2 digits after dot
                            distance = distance.toFixed(2);
                        }
                        else {
                            distance = Math.floor(distance)
                        }
                        return (
                            <tr key={indx}>
                                <td>{`${day}/5/2021  07:50:52`}</td>
                                <td>{`${distance} km`}</td>
                                <td><button onClick={() => setPoints(carRoutes[indx])} className={styles.ViewBtn}>View</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Table