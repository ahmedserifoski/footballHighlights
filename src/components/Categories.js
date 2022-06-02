import React, {useState} from 'react'
import {Button} from "react-bootstrap"

import { Link } from "react-router-dom";


//make a series of clickable items that filter out the results based od league clasifications:
    //make the buttons
    //add event listener
    //make a function that takes data from api and filters results

const Categories = () => {

  return (
   <div className='Categories mt-5 mb-5'>
        <Button className='button mx-2 my-3'><Link className='link text-light' to="/">Home</Link></Button> 
        <Button className='button mx-2' ><Link className='link text-light' to="/spain">Spain</Link>{" "}</Button> 
        <Button className='button mx-2' ><Link className='link text-light' to="/england">England</Link>{" "}</Button>
        <Button className='button mx-2' ><Link className='link text-light' to="/germany">Germany</Link>{" "}</Button> 
        <Button className='button mx-2' ><Link className='link text-light' to="/france">France</Link>{" "}</Button> 
        <Button className='button mx-2' ><Link className='link text-light' to="/italy">Italy</Link>{" "}</Button> 
   </div>
  )
}

export default Categories


{/* <div className="bg-black text-center pt-4 pb-1 fs-3">
<span> <Button value="ITALY" bg="light" text="dark" onClick={e => filterLeague(e)}>Italy</Button></span>
<span> <Button value="GERMANY" bg="light" text="dark" onClick={e => filterLeague(e)}>Germany</Button></span>
<span> <Button value="ENGLAND" bg="light" text="dark" onClick={e => filterLeague(e)}>England</Button></span>
<span> <Button value="FRANCE" bg="light" text="dark" onClick={e => filterLeague(e)}>France</Button></span>
<span> <Button value="SPAIN" bg="light" text="dark" onClick={e => filterLeague(e)}>Spain</Button></span>
</div> */}