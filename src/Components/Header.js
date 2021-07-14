import { Chip } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

function Header()
{
    return (
        <header>
            <h1>iTravel</h1>
            <nav>
                <Chip component={NavLink} to='/FlightBrowser' exact label="Check Out Flights"/>
                <Chip component={NavLink} to='/TicketPurchase' exact label="Buy Tickets"/>
            </nav>
        </header>
    )
}
export default Header