import { useEffect } from "react";

function TicketViewer({logIn})
{
    // console.log(logIn)
    useEffect(() => {
        fetch(`http://localhost:9393/passenger_tickets/${logIn.id}`)
        .then(resp => resp.json())
        .then(data.map(ticket => ))
    }, [])
    return (
        <div>
            <h1>View your tickets here</h1>

        </div>
        
    )
}

export default TicketViewer;