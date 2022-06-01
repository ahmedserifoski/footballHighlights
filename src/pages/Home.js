import React, {useState, useContext} from 'react'
// import {Context} from "../context/Context"
import HighlightCard from '../components/HighlightCard'
import Categories from '../components/Categories'

const Home = ({footballData}) => {
    console.log(footballData)

    // const {footballData, englandData} = useContext(Context)
    const [filteredLeague, setFilteredLeague] = useState([])
    // console.log(englandData)

    // console.log(footballData)

//     const allLeagues = footballData.map((highlight, i) => (
//         <HighlightCard  key={i} footballData={highlight}/>
//     ))  

//     const filterLeague = (e) => {
//       setFilteredLeague(footballData.filter(highlight => (
//           highlight.competition.includes(e.target.value)
//       )))
//   }

  return (
    <div>
        <h1 className="bg-dark text-light mb-0 p-4 text-center">Football Highlights</h1>
        <Categories/>
        {/* {allLeagues} */}
    </div>
  )
}

export default Home
{/* <div className="App pt-4">
  {filteredLeague.length != 0 ? 
  filteredLeague.map(((highlight, i) => (
      <HighlightCard key={i} footballData={highlight} />
  ))) : 
    // "Nothin to see here really"
  footballData.map(((highlight, i) => (
    <HighlightCard key={i} footballData={highlight} />
)))
}
</div>  */}