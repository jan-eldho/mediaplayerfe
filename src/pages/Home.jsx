import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'

function Home() {

  const [uploadVideoStatus,setuploadVideoStatus]=useState({})  //state lifting method

  return (
    <>
   <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center '>
    <div className='add_video'>

      <Add setVideoStatus ={setuploadVideoStatus}/>

    </div>
    <Link to='/watch' style={{textDecoration:'none',color:'white',fontSize:'25px'}}>
WATCH HISTORY
    </Link>

   </div>
   <div className='container mt-5 mb-5 d-flex justify-content-between'>
    <div className='col-md-9 mt-5'>
      <h4 className='text-style mb-5'>All Videos</h4>
      <View  uploadVideoStatus ={uploadVideoStatus}/>

    </div>
    <div className='category col-md-3'>

      <Category />

    </div>

   </div>
    </>
  )
}

export default Home