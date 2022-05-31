import React, {useState, useEffect, useContext} from "react";
import './App.css';
import {Context} from "./context/Context"
import HighlightCard from "./components/HighlightCard";
import HighlightVideo from "./components/HighlightVideo";




function App() {

  // const {footballData} = useContext(Context)  

  const [footballData, setFootballData] = useState([])

  useEffect(() => {
    const fetchFootballData = async () => {
      const res = await fetch("https://www.scorebat.com/video-api/v3/feed/?token=MTk4ODVfMTY1MzMyNTIyM183YThjMmY1MTlmMTdlZDQ5MDU2NzZkZTBkMmYzZjIxNGI1Nzg2OTM2")
      const data = await res.json(res)
      setFootballData(data.response)
      
  }
  
  fetchFootballData()
    
  }, [])

  // console.log(footballData)

  return (
    <div className="App">
      {footballData.map(((highlight, i) => (
          <HighlightCard key={i} footballData={highlight} />
      )))}
    </div>
  );
}

export default App;