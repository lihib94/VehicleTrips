
//sums up distance of all points coordinates of one route
const calcDistance = (route) => {
    var sum = 0;
    for (var i = 0; i < route.length - 1; i++) {
        sum += calcTwoPointsdistance(route[i].latitude, route[i].longtitude, route[i + 1].latitude, route[i + 1].longtitude)
    }
    return sum;
}
export default calcDistance

//calculates the distance between 2 points in KM
const calcTwoPointsdistance = (lat1, lon1, lat2, lon2) => {
    var radlat1 = Math.PI * lat1 / 180
    var radlat2 = Math.PI * lat2 / 180
    var theta = lon1 - lon2
    var radtheta = Math.PI * theta / 180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180 / Math.PI
    dist = dist * 60 * 1.1515
    dist = dist * 1.609344
    return dist
}
