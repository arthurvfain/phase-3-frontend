import { useEffect, useState } from "react";
import Ticket from './Ticket'

function TicketViewer({logIn})
{

    const [tickets, setTickets] = useState([])
    let passTix
    function handleDelete(flightId){
        // let flights = tickets.map(flight => {
        //     if (flight.id === flightId) {
        //    let flightTickets = flight.tickets.filter(ticket => ticket.id !== ticketId)
        //    flight.tickets = flightTickets
        //    return flight
        //     } else {
        //         return flight
        //     }
        // })
        // debugger
       let flights = tickets.filter(ticket => ticket.id !== flightId)
       setTickets(flights)
    }
    useEffect(() => {
        if (logIn !== "")
        {
        fetch(`http://localhost:9393/passenger_tickets/${logIn.id}`)
        .then(resp => resp.json())
        .then(data => setTickets(data))
        // .then(passTix = tickets.map(ticket=> {airline_name = ticket.airline_name, arrival = ticket.arrival, departure = ticket.departure, destination = ticket.destination.location_name, flight_num = ticket.flight_num, id =  ticket.tickets.find(ticket=>ticket.passenger_id === logIn.id)}))
        // .then(console.log)
        }
        //passTix = tickets.map(ticket=> {airline_name = ticket.airline_name, arrival = ticket.arrival, departure = ticket.departure, destination = ticket.destination.location_name, flight_num = ticket.flight_num, id =  ticket.tickets.find(ticket=>ticket.passenger_id === logIn.id)})
        //return(() => console.log("loaded"))
    }, [])

    // console.log(tickets)
    
    // console.log(passTix)
    let ticketsList = tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} logIn={logIn} handleDelete={handleDelete} />)

    return (
        <div style={{backgroundImage: 'url(https://global-uploads.webflow.com/5ee3c9151829ab5cd0428a88/5f5d2b9a026a49f1e9ecf541_Sunset-Behind-Clouds-banner-p-1080.jpeg)', backgroundSize: '300%', backgroundAttachment: 'fixed', height: '100vh', padding: '1vh'}}>
            <h1 style={{color: "white"}}>View your tickets here</h1>
            {ticketsList}
        </div>
        
    )
}

export default TicketViewer;