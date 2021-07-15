import { Chip } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

function Header({passengers, setLogIn})
{
    let passengerList = passengers.map(passenger => <option>{passenger.name}</option>)

    function loggedIn(e) {
        // console.log(e.target.value)
        setLogIn(e.target.value)
    }

    return (
        <header>
            <h1>iTravel</h1>
            <select onChange={loggedIn}>
                {passengerList}
            </select>
            <nav>
                <Chip component={NavLink} to='/FlightBrowser' exact label="Check Out Flights"/>
                <Chip component={NavLink} to='/TicketViewer' exact label="View Tickets"/>
            </nav>
        </header>
    )
}
export default Header