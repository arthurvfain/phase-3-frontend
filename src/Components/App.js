import Header from './Header'
import Search from './Search'
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'
import '../App.css';
import FlightBrowser from './FlightBrowser'
import TicketViewer from './TicketViewer'
import { useState, useEffect } from 'react'


function App() {
  
  const [flights, setFlights] = useState([])
  const [destinations, setDestinations] = useState([])
  const [passengers, setPassengers] = useState([])
  const [logIn, setLogIn] = useState({})

  useEffect(() => {
    fetch('http://localhost:9393/flights').then(r=>r.json()).then(data=>setFlights(data))
    fetch('http://localhost:9393/destinations').then(r=>r.json()).then(data=>setDestinations(data))
    fetch('http://localhost:9393/passengers').then(r=>r.json()).then(data=>setPassengers(data))
  }, [])

  console.log(logIn)

  return (
    <div className="App">
      <Header passengers = {passengers} setLogIn = {setLogIn} />
      
      <Switch>
        <Route path='/FlightBrowser' component={()=><FlightBrowser flights = {flights} destinations = {destinations} logIn = {logIn} />}/>
        <Route path='/TicketViewer' component={()=><TicketViewer logIn = {logIn} />}/>
        
      </Switch>
    </div>
  );
}

export default App;
