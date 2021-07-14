import Search from "./Search"
import FlightCard from "./FlightCard"
import { Grid } from "@material-ui/core"
function FlightBrowser({flights, destinations})
{
    console.log(destinations)
    let flightCards = destinations.map(destination=><FlightCard destination={destination}/>)
    return (
        <div>
            <Search/>

            {flightCards}
        </div>
    )
}

export default FlightBrowser