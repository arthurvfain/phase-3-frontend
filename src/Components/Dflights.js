import { Chip } from '@material-ui/core'

function Dflights (flight) 
{
    return (
        <div>
            <h1>{flight.arrival}</h1>
            <h1>{flight.departure}</h1>
            <Chip label="Select This Flight"/>
        </div>
    )
}

export default Dflights