import styles from '../assets/css/TripsHistory.module.css'
import { Link, useParams } from "react-router-dom";
import { FaTruckMoving } from 'react-icons/fa'
import { useState } from "react";
import Table from './Table';
import Map from './Map';

const TripsHistory = ({ drivingRoutes }) => {

    //params - car plate
    const params = useParams();

    //states
    const [points, setPoints] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [numCarsStart, setNumCarsStart] = useState(1)
    const [numCarsEnd, setNumCarsEnd] = useState(7)

    //routes amount of a car
    const routesAmount = Object.keys(drivingRoutes[params.carPlate]).length;

    const onClickRightHanadler = () => {
        setCurrentPage(prev => prev + 1);
        setNumCarsStart(prev => prev + 7)
        setNumCarsEnd(prev => prev + 7)
    }
    const onClickLeftHandler = () => {
        setCurrentPage(prev => prev - 1)
        setNumCarsStart(prev => prev - 7)
        setNumCarsEnd(prev => prev - 7)
    }


    return (
        <div className={styles.leftRightContainer} >
            <div className={styles.leftContainer}>
                <div className={styles.headlineContainer}>
                    <div className={styles.linktoTripsHistory}>
                        <Link to="/Home" >{"<"}</Link>
                    </div>
                    <h3>Trips History</h3>
                    <div className={styles.carPlateContainer}>
                        <div><FaTruckMoving className={styles.carIcon} /></div>
                        <div className={styles.plateNum}>{params.carPlate}</div>
                    </div>
                </div>
                <Table setPoints={setPoints} currentPage={currentPage} drivingRoutes={drivingRoutes} />
                <div className={styles.pagesContainer}>
                    <div className={styles.topContainer}>
                        <div>{`${numCarsStart} - ${numCarsEnd}`}</div>
                        <div>of {routesAmount}</div>
                    </div>
                    <div className={styles.arrowButtens}>
                        {(currentPage > 1) && <button onClick={onClickLeftHandler}>{'<'}</button>}
                        {(currentPage < 4) && <button onClick={onClickRightHanadler}>{'>'}</button>}
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <Map points={points} />
            </div>
        </div>);
}
export default TripsHistory