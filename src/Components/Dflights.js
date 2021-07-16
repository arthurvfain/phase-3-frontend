import { Chip, Card } from '@material-ui/core'

function Dflights ({flight, logIn}) 
{
    console.log(flight.id)
    console.log(logIn.id)
    function makeTicket(){
        let ticketData = {
            "flight_id": parseInt(flight.id,10),
            "passenger_id": parseInt(logIn.id,10)
        } 
        console.log(ticketData)
        fetch('http://localhost:9393/new_ticket',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(ticketData)

        }).then(res => res.json())

    }
    return (
        <Card>
            <h1>{flight.airline_name}</h1>
            <h4>Flight Number: {flight.flight_num}</h4>
            <h4>Max Capacity: {flight.max_cap}</h4>
            <Chip label="Buy This Flight" onClick={makeTicket} color="secondary"/>
        </Card>
    )
}

export default Dflights