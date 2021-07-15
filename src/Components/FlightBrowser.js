import Search from "./Search"
import Destinations from "./Destinations"
import DestinationCard from "./DestinationCard"
import { Grid, Chip } from "@material-ui/core"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
function FlightBrowser({flights, destinations})
{
        
        let destinationCards = destinations.map(destination=>
        <Grid item xs={6} sm={3} key={destination.id}> 
            <DestinationCard destination={destination}/> 
        </Grid>
    )
    // console.log(destinationCards)
    return(
        <div>
        <Search/>
        <Grid container spacing={5}>
            {destinationCards}
        </Grid>
        </div>
    )
    
}

export default FlightBrowser
// <div>
//     <Chip component={Link} to='/Destinations' exact label="Check Out Destinations"/>
//     <Switch>
//         <Route path="/Destinations" component={() => <Destinations flights={flights} destinations ={destinations} />} />
//         <Route path="/" />
//     </Switch>  
// </div>