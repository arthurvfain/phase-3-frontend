import { useEffect, useState } from "react";
import Ticket from './Ticket'

function TicketViewer({logIn})
{

    const [tickets, setTickets] = useState([])
    // console.log(logIn)
    useEffect(() => {
        fetch(`http://localhost:9393/passenger_tickets/${logIn.id}`)
        .then(resp => resp.json())
        .then(data => setTickets(data))
        // .then(console.log)
    }, [])

    let ticketsList = tickets.map(ticket => <Ticket ticket={ticket} />)

    return (
        <div>
            <h1>View your tickets here</h1>
            {ticketsList}
        </div>
        
    )
}

export default TicketViewer;