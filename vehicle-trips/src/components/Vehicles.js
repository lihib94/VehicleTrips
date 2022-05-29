import { useState } from 'react';
import styles from '../assets/css/Vehicles.module.css';
import RoutesMap from './RoutesMap'

const Vehicles = ({ drivingRoutes }) => {

    //organize the content by page number , total cars : 5 ,display 2 cars per page
    const [currentPage, setCurrentPage] = useState(1)
    const [numCarsStart, setNumCarsStart] = useState(1)
    const [numCarsEnd, setNumCarsEnd] = useState(2)

    //vehicales Amount (5)
    const vehicalesAmount = Object.keys(drivingRoutes).length;

    const onClickRightHanadler = () => {
        setCurrentPage(prev => prev + 1);
        setNumCarsStart(prev => prev + 2)
        setNumCarsEnd(prev => prev + 2)
    }
    const onClickLeftHandler = () => {
        setCurrentPage(prev => prev - 1)
        setNumCarsStart(prev => prev - 2)
        setNumCarsEnd(prev => prev - 2)
    }
    return (
        <div className={styles.vehicles}>
            <h3>Vehicles</h3>
            <RoutesMap currentPage={currentPage} drivingRoutes={drivingRoutes} />
            <div className={styles.pagesContainer}>
                <div className={styles.topContainer}>
                    <div>{`${numCarsStart} ${(numCarsStart < vehicalesAmount - 1) ? `- ` + numCarsEnd : ""}`}</div>
                    <div>of {vehicalesAmount}</div>
                </div>
                <div className={styles.arrowButtens}>
                    {(currentPage > 1) && <button onClick={onClickLeftHandler}>{'<'}</button>}
                    {(currentPage < vehicalesAmount - 2) && <button onClick={onClickRightHanadler}>{'>'}</button>}
                </div>
            </div>
        </div>);
}
export default Vehicles