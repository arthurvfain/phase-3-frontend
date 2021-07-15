import { Chip, Card } from '@material-ui/core'

function Dflights ({flight}) 
{
    // console.log(flight)
    function makeTicket(){


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