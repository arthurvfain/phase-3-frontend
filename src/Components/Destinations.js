function Destinations({destinations}){
    console.log(destinations)
    let destinationCards = destinations.map(destination=>
    <Grid item xs={6} sm={3} key={destination.id}> 
        <DestinationCard flight = {flight} destination={destination}/> 
    </Grid>
    )
    return(
        <div>
        <Search/>
        <Grid container spacing={5}>
            {destinationCards}
        </Grid>
        </div>
    )

}

export default Destinations