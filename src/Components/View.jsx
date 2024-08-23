import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { getAllvideos } from '../Services/AllApi';
import { Row, Col } from 'react-bootstrap';

function View({uploadVideoStatus}) {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const getVideos = async () => {
    const response = await getAllvideos();
    console.log(">>>ALL VIDEOS<<<<");
    console.log(response);
    const { data } = response;
    setAllVideos(data);
  };

  useEffect(() => {
    getVideos();
    
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus]);

// uploadVideoStatus - state lifting





  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos.map((videos, index) => (
              <Col sm={3} lg={3} md={6} xl={3} key={index} className='me-5 mt-3 m-2'>
                <VideoCard displayVideo={videos} setDeleteVideoStatus={setDeleteVideoStatus} />
              </Col>
            )) :
            <p className='text-style' style={{fontSize:"30px"}}>Nothing to display...</p>
        }
      </Row>
    </>
  );
}

export default View;
