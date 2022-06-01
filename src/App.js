import React, {useState, useEffect} from "react";
import './App.css';

import {Routes, Route} from "react-router-dom"

import Home from "./pages/Home"


function App() {
  const [footballData, setFootballData] = useState([])
  const [filteredLeague, setFilteredLeague] = useState([])

  const filterLeague = (e) => {
    setFilteredLeague(footballData.filter(highlight => (
        highlight.competition.includes(e.target.value)
    )))
}

  useEffect(() => {
    const fetchFootballData = async () => {
      const res = await fetch("https://www.scorebat.com/video-api/v3/feed/?token=MTk4ODVfMTY1MzMyNTIyM183YThjMmY1MTlmMTdlZDQ5MDU2NzZkZTBkMmYzZjIxNGI1Nzg2OTM2")
      const data = await res.json(res)
      setFootballData(data.response)
      
  }
  
  fetchFootballData()
    
  }, [])

  console.log(footballData)

  return (
  <>
  
  </>
  );
}

export default App;


{/* <h1 className="bg-dark text-light mb-0 p-4 text-center">Football Highlights</h1>
    <Categories filterLeague={filterLeague} />
    <div className="App pt-4">
      {filteredLeague.length != 0 ? 
      filteredLeague.map(((highlight, i) => (
          <HighlightCard key={i} footballData={highlight} />
      ))) : 
        // "Nothin to see here really"
      footballData.map(((highlight, i) => (
        <HighlightCard key={i} footballData={highlight} />
    )))
    }
    </div> 
  */}