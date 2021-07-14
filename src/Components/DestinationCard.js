import { Card } from '@material-ui/core'
import {useEffect} from 'react'
// import FlightViewer from './FlightViewer'

function DestinationCard({destination})
{
    function handleClick(e) {
        fetch(`http://localhost:9393/flights_to_destination/${destination.id}`)
            .then(res => res.json())
            .then(data => data.length > 0 ? console.log(data) : console.log("no flights found"))  
    }
    return (
        <Card onClick={handleClick}>
            <h4>{destination.location_name}</h4>
            {/* <h6>{flight.arrival}</h6>
            <h6>{flight.departure}</h6> */}
        </Card>
    )
}

export default DestinationCard