import Search from "./Search"
import Destinations from "./Destinations"
import DestinationCard from "./DestinationCard"
import { Grid, Chip } from "@material-ui/core"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
function FlightBrowser({flights, destinations, logIn})
{
        
        let destinationCards = destinations.map(destination=>
        <Grid item xs={6} sm={3} key={destination.id}> 
            <DestinationCard destination={destination} logIn = {logIn}/> 
        </Grid>
    )
    // console.log(destinationCards)
    return(
        <div style={{backgroundImage: 'url(https://global-uploads.webflow.com/5ee3c9151829ab5cd0428a88/5f5d2b9a026a49f1e9ecf541_Sunset-Behind-Clouds-banner-p-1080.jpeg)', backgroundSize: '300%', backgroundAttachment: 'fixed', height: '100vh', padding: '1vh'}}>
        {/* <Search flights = {flights} /> */}
        <Grid container spacing={7}>
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