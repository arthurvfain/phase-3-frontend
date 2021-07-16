import { Chip, Avatar} from '@material-ui/core'
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
        <header style={{backgroundImage: 'url(https://images.fineartamerica.com/images-medium-large-5/pink-sunset-clouds-kelly-chang-.jpg)', backgroundSize: '100%', backgroundAttachment: 'fixed', padding: '1vh', backgroundPositionY: '50%'}}>
            <h1>iTravel</h1>
            <select onChange={loggedIn}>
                <option>Log In Here</option>
                {passengerList}
            </select>
            <hr/>
            <nav>
                <Chip component={NavLink} to='/FlightBrowser' exact label="Check Out Flights" avatar={<Avatar alt='poke' src='https://www.pngfind.com/pngs/m/73-735567_vector-airplane-airplane-blue-logo-png-transparent-png.png' />} color='secondary'/>
                <Chip component={NavLink} to='/TicketViewer' exact label="View Tickets" avatar = { <Avatar alt='poke' src='https://i.pinimg.com/736x/af/4d/64/af4d6478c83708cbdbd015a1e4583921.jpg'/>}  color='primary'/>
            </nav>
            <hr/>
        </header>
    )
}
export default Header