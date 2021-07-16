import { TextField } from '@material-ui/core'
import { useState } from "react"

function Search({ flights })
{
    
    return (
        <form>
            <TextField id="outlined-basic" label="Search for Flights" variant="outlined" />
        </form>
    )
}

export default Search