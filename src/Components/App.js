import Header from './Header'
import Search from './Search'
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'
import '../App.css';
import FlightBrowser from './FlightBrowser'
import TicketPurchase from './TicketPurchase'
import { useState, useEffect } from 'react'


function App() {
  
  const [flights, setFlights] = useState([])
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetch('http://localhost:9393/flights').then(r=>r.json()).then(data=>setFlights(data))
    fetch('http://localhost:9393/destinations').then(r=>r.json()).then(data=>setDestinations(data))
  }, [])

  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route path='/FlightBrowser' component={()=><FlightBrowser flights = {flights} destinations = {destinations}/>}/>
        <Route path='/TicketPurchase' component={()=><TicketPurchase/>}/>
      </Switch>
    </div>
  );
}

export default App;
