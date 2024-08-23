import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistory, getVideosHistory } from '../Services/AllApi';


function Watchhistory() {
  const [videoHistory, setVideoHistory] = useState([]);


  const getHistory = async () => {
    const response = await getVideosHistory();
    console.log("History", response);
    const { data } = response;
  
    setVideoHistory(data);
    
  };

  useEffect(() => {
    getHistory();
   
  }, []);

  const handleDelete = async(historyid)=>{
    await deleteHistory(historyid)
    getHistory();
  }

  return (
    <>
      <div className='container mt-5 d-flex justify-content-between mb-3'>
        <h3 className='text-style'>Watch History</h3>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "700",
            fontSize: "18px"
          }}
          to='/home'
        >
          <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
        </Link>
      </div>
      <table className='table container mb-5 mt-5 border rounded' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {videoHistory.length > 0 ? (
            videoHistory.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.caption}</td>
                <td>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                </td>
                <td>{item.timeStamp}</td>
                <td><button className='btn btn-danger' onClick={()=>handleDelete(item?.id)}>
                <i className="fa-solid fa-trash" style={{ cursor: "pointer" }}></i>
                </button>
                  
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className='text-center text-style' style={{fontSize:"30px"}}>No History found...</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Watchhistory;
