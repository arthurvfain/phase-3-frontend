import { Card } from '@material-ui/core'
function FlightCard({destination})
{
    return (
        <Card>
            <h4>{destination}</h4>
            {/* <h6>{flight.arrival}</h6>
            <h6>{flight.departure}</h6> */}
        </Card>
    )
}

export default FlightCard