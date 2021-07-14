import Search from "./Search"
import DestinationCard from "./DestinationCard"
import { Grid } from "@material-ui/core"
function FlightBrowser({flights, destinations})
{
    console.log(destinations)
    let destinationCards = destinations.map(destination=>
    <Grid item xs={6} sm={3} key={destination.id}> 
    <DestinationCard destination={destination}/> 
    </Grid>
    )
    return (
        <div>
            <Search/>
            <Grid container spacing={5}>
                {destinationCards}
            </Grid>
            
        </div>
    )
}

export default FlightBrowser