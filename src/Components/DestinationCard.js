import { Card, Chip } from '@material-ui/core'
import Popup from 'reactjs-popup'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import { auto, createPopper } from '@popperjs/core';
import Dflights from './Dflights'

function DestinationCard({ destination, logIn })
{
    const [flights, setFlights] = useState([])
    const [flightsList, setFlightsList] = useState([])
    const [clicked, setClicked] = useState(false)
    

    const [popupRendered, setPopupRendered] = useState(true)
    
    function handleClick(e) {
        console.log("i fired!")
        // setClicked(clicked => !clicked)
        fetch(`http://localhost:9393/flights_to_destination/${destination.id}`)
        .then(res => res.json())
        // .then(console.log)
        .then(data => {
            let flightList = data.map(flight => <Dflights flight = {flight} logIn={logIn} />)
            // console.log(flightList)
            setFlightsList(flightList)
        })
        
        // .then(data => data.length > 0 ? setFlights(data) : console.log("No flights found"))
        // .then(console.log(flights))
        // .then(setFlightsList(flights.map(flight => <Dflights flight = {flight} />)))
        // .then(console.log(flightsList))
        // .then(setClicked(true))
    }
    console.log(clicked)
    let popupJsx = (
        <Popup key={destination.id} onClose={handleClose} contentStyle={{width:auto}} trigger={<Card onClick={handleClick}><h4>{destination.location_name}</h4></Card>} position="bottom center">
                <Card>
                    {flightsList}
                    {clicked ? null : <Chip label="See Flights" onClick={handleClick}/>}
                </Card>
        </Popup>
    )
    
    function handleClose(){
        setFlights([])
        setFlightsList([])
        setClicked(false)
    }


    return (
        // <FlightViewer flight = {flight} destination = {destination} >
        // <Card onClick={handleClick}>
        //     <h4>{destination.location_name}</h4>
        // </Card>
        // </FlightViewer>
        
        <div>
            {/* {popupRendered ? popupJsx : flights} */}
            {popupJsx}
        </div>
        )
}

export default DestinationCard