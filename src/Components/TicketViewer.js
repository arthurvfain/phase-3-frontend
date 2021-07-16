import { useEffect, useState } from "react";
import Ticket from './Ticket'

function TicketViewer({logIn})
{

    const [tickets, setTickets] = useState([])
    let passTix
    // console.log(logIn)
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
    }, [tickets])

    // console.log(tickets)
    
    // console.log(passTix)
    let ticketsList = tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} logIn={logIn} />)

    return (
        <div>
            <h1>View your tickets here</h1>
            {ticketsList}
        </div>
        
    )
}

export default TicketViewer;