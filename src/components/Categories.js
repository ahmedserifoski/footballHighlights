import React, {useState} from 'react'
import {Badge, Button} from "react-bootstrap"

//make a series of clickable items that filter out the results based od league clasifications:
    //make the buttons
    //add event listener
    //make a function that takes data from api and filters results

const Categories = ({filterLeague}) => {

    const [competition, setCompetition] = useState()
    

  return (
    <div className="bg-black text-center pt-4 pb-1 fs-3">
        <span> <Button value="ITALY" bg="light" text="dark" onClick={e => filterLeague(e)}>Italy</Button></span>
        <span> <Button value="GERMANY" bg="light" text="dark" onClick={e => filterLeague(e)}>Germany</Button></span>
        <span> <Button value="ENGLAND" bg="light" text="dark" onClick={e => filterLeague(e)}>England</Button></span>
        <span> <Button value="FRANCE" bg="light" text="dark" onClick={e => filterLeague(e)}>France</Button></span>
        <span> <Button value="SPAIN" bg="light" text="dark" onClick={e => filterLeague(e)}>Spain</Button></span>
    /</div>
  )
}

export default Categories