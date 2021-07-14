import FlightBrowser from "./FlightBrowser";
import FlightCards from "./FlightCards"
import {useState} from 'react'


function FlightViewer({handleClick, flight, destination}) {

    // console.log(destination)

    return (
        <FlightCards handleClick = {handleClick} flight = {flight} destination = {destination} />
    )
}

export default FlightViewer;