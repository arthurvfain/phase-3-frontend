import { Chip } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

function Header({passengers, setLogIn})
{
    let passengerList = passengers.map(passenger => <option key={passenger.id}>{passenger.name}</option>)

    function loggedIn(e) {
        
        let user = passengers.find(passenger => passenger.name === e.target.value)
        // console.log(user)
        setLogIn(user)
    }

    return (
        <header>
            <h1>iTravel</h1>
            <select onChange={loggedIn}>
                <option>Log In Here</option>
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