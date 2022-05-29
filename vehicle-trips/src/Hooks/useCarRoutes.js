import React, { useEffect, useState } from "react";

export const useCarRoutes = () => {

    const [carRoutes, setCarRoutes] = useState({})
    const drivingRoutes = {};

    //assign to "drivingRoutes" all data from backend input (carRoutes) 
    // example : content of one indx : "123-34-567" : [0 : [0...i], 1:[0...j],...,27:[0...h] ] {0<i,j,h}
    for (const [dayNo, dayData] of Object.entries(carRoutes)) {
        for (const [carNo, routes] of Object.entries(dayData)) {
            if (!drivingRoutes[carNo]) {
                Object.assign(drivingRoutes, { [carNo]: {} })
            }
            Object.assign(drivingRoutes[carNo], { [dayNo]: routes })
        }
    }

    //fetch data from backend input and save it inside "carRoutes" .
    useEffect(() => {
        fetch('http://localhost:3001/getCarRoutes',
            {
                headers:
                    { 'Content-Type': 'application/json', 'Accept': 'application/json' }
            }).then(data => data.json()).then(data => setCarRoutes(data))
    }, [])

    return drivingRoutes;
}

