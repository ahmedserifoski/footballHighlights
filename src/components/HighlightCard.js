import React, {useState} from 'react'

import { Card, Button } from 'react-bootstrap'

const HighlightCard = ({footballData}) => {

  // console.log("<" + footballData.videos[0].embed.split("><")[1] + "></iframe>")


  const [showIframe, setShowIframe] = useState(false)
  const [matchView, setMatchView] = useState(footballData.matchviewUrl)
  // style={{width:"1000%", height:"0px", position:"relative", paddingBottom:"56.250%", background:"#000"}}

  // const show = (showIframe) => {

  // }

  return (

    <Card className='HighlightCard m-3 bg-dark text-light' >
      <Card.Img variant="top" src={footballData.thumbnail} />

      <Card.Body>
        <Card.Title>{footballData.title}</Card.Title>
        <a href={matchView}><Button variant="primary">Watch Highlight</Button>{' '}</a>

        {/* <Button variant="primary" onClick={() => setShowIframe(showIframe => !showIframe)}></Button> */}
        {/* {showIframe ? <HighlightVideo footballData={footballData}/> : null} */}
        {/* <HighlightVideo/> */}
      </Card.Body>
    </Card>


  )
}

export default HighlightCard



    // <div className="card mt-5 border-0" style={{width: "18rem"}}>
    //     <img className="card-img-top" src={footballData.thumbnail} alt="Card image cap"/>
    //     {/* {startRegex.test(footballData.videos[0].embed) } */}
    //     {/* <iframe></iframe> */}
    //     {/* ¨<div className='container' dangerouslySetInnerHTML={{__html: str}}></div> */}

    //     <div className="card-body bg-dark text-light">
    //     <h5 className="card-title">{footballData.title}</h5>
    //     <Link to="HighlightVideo">
    //     <button className="btn btn-primary">Watch Highlight</button>
    //     </Link>
    //     </div>
    // </div>