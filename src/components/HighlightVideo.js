import React, {useState, useContext} from 'react'
import {Modal, Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

const HighlightVideo = ({footballData}) => {

  const [matchView, setMatchView] = useState(footballData.matchviewUrl)


  // const [embed, setEmbed] = useState("<" + footballData.videos[0].embed.split("><")[1] + "></iframe>")
  // const [alma, setAlma] = useState("Alma")
  // console.log("<" + footballData.videos[0].embed.split("><")[1] + "></iframe>")
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{footballData.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <a href={matchView}>Watch Match View</a>
        {/* <div dangerouslySetInnerHTML={{__html: embed}}></div> */}
        {/* {"<" + footballData.videos[0].embed.split("><")[1] + "></iframe>"} */}
      </Modal.Body>

      {/* <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer> */}
    </Modal.Dialog>

  )
}

export default HighlightVideo