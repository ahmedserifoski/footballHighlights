import React, {useState, useEffect} from 'react';
const Context = React.createContext()

const ContextProvider = (props) => {

  const alma = "alma"
  const [footballData, setFootballData] = useState([])

  // setFootballData("Alma")

  useEffect(() => {
    const fetchFootballData = async () => {
      const res = await fetch("https://www.scorebat.com/video-api/v3/feed/?token=MTk4ODVfMTY1MzMyNTIyM183YThjMmY1MTlmMTdlZDQ5MDU2NzZkZTBkMmYzZjIxNGI1Nzg2OTM2")
      const data = await res.json(res)
      setFootballData(data.response)
      
  }
  
  fetchFootballData()
    
  }, [])

  return (
    <Context.Provider value={{footballData}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}