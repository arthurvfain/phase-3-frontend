import { Card } from '@material-ui/core'
function FlightCards({handleClick, flight, destination}){
    console.log(flight)
    return (
    <Card>
        <h4>{destination.location_name}</h4>
        <h6>{flight.arrival}</h6>
        <h6>{flight.departure}</h6>
    </Card>
    )
}
export default FlightCards