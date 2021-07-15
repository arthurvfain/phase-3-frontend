import { Card, Chip } from '@material-ui/core'

function Ticket ({ticket}) {

    function handleCancel(){
        fetch(`http://localhost:9393/delete_ticket/${ticket.id}`, {
            method: 'DELETE'
        })


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