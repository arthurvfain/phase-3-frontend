import { Chip, Card } from '@material-ui/core'

function Dflights ({flight, logIn}) 
{
    console.log(flight.id)
    console.log(logIn.id)
    function makeTicket(){
        fetch('http://localhost:9393/new_ticket',{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "flight_id": flight.id,
                "passenger_id": logIn.id
            })

        })

    }
    return (
        <Card>
            <h1>{flight.airline_name}</h1>
            <h4>Flight Number: {flight.flight_num}</h4>
            <h4>Max Capacity: {flight.max_cap}</h4>
            <Chip label="Select This Flight" onClick={makeTicket}/>
        </Card>
    )
}

export default Dflights