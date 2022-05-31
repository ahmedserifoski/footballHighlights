import React, {useState} from 'react'
import {Badge} from "react-bootstrap"

//make a series of clickable items that filter out the results based od league clasifications:
    //make the buttons
    //add event listener
    //make a function that takes data from api and filters results

const Categories = ({footballData}) => {

    const [competition, setCompetition] = useState()

    const splittedData = footballData.filter(highlight => (
        highlight.competition.includes("La Liga")
    ))
console.log(splittedData)
    const filterLeague = (footballData) => {

    }

  return (
    <div className="bg-black text-center pt-4 pb-1 fs-3">
        <span> <Badge bg="light" text="dark" onClick={filterLeague}>Serie A</Badge></span>
        <span> <Badge bg="light" text="dark">Bundes Liga</Badge></span>
        <span> <Badge bg="light" text="dark">Premier League</Badge></span>
        <span> <Badge bg="light" text="dark">La Liga</Badge></span>
        <span> <Badge bg="light" text="dark">Ligue 1</Badge></span>
    </div>
  )
}

export default Categories