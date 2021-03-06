import { Card, Chip } from '@material-ui/core'

function Ticket ({ticket, logIn, handleDelete}) {


    // console.log(ticket)
    // console.log(ticketId)
    function handleCancel(){
        //console.log(ticket.id)
        let ticketId = ticket.tickets.find(ticket=>ticket.passenger_id === logIn.id).id
        handleDelete(ticket.id)
        fetch(`http://localhost:9393/delete_ticket/${ticketId}`, {
            method: 'DELETE'
        })
        .then(r=>r.json())
        .then(console.log)
    }
    return(
    <Card>
        <h4>Flight To: {ticket.destination.location_name}</h4>
        <h5>Airline: {ticket.airline_name}</h5>
        <h5>Flight Number: {ticket.flight_num}</h5>
        <h6>Departing At: {ticket.departure}</h6>
        <h6>Arriving At: {ticket.arrival}</h6>
        <Chip label="Cancel Flight" onClick={handleCancel}/>
    </Card>
    )
}

export default Ticket