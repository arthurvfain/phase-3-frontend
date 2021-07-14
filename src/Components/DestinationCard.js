import { Card } from '@material-ui/core'
import Popup from 'reactjs-popup'
import {useState} from 'react'
import FlightViewer from './FlightViewer'
import Link from 'react-router-dom'

function DestinationCard({flight, destination})
{
    // const [isClicked, setClicked] = useState(false)

      

    function handleClick(e) {
        fetch(`http://localhost:9393/flights_to_destination/${destination.id}`)
            .then(res => res.json())
            .then(data => data.length > 0 ? console.log(data) : console.log("No flights found"))
    }

    return (
        <FlightViewer flight = {flight} destination = {destination} >
        <Card component ={Link}>
            <h4>{destination.location_name}</h4>
        {/* <h6>{flight.arrival}</h6>
        <h6>{flight.departure}</h6> */}
        </Card>
        </FlightViewer>
    )
}

export default DestinationCard