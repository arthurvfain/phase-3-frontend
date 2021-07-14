import Search from "./Search"
import DestinationCard from "./DestinationCard"
import { Grid } from "@material-ui/core"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function FlightBrowser({flights, destinations})
{

    return (
        <div>
            <Switch>
                <Route path="/destinations" component={() => <Destinations destinations ={destinations} />} />
                <Route path="/" />
            </Switch>  
        </div>
    )
}

export default FlightBrowser