import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../Services/AllApi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    // Convert embed URL to standard YouTube URL
    const videoId = displayVideo.youtubeLink.split('/').pop();
    const newUrl = `https://www.youtube.com/watch?v=${videoId}`;
    setYoutubeUrl(newUrl); // Update state with the converted URL

    const today = new Date();
    const timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);

    const reqBody = {
      url: newUrl, // Use the converted URL here
      caption: displayVideo.caption,
      timeStamp: timeStamp
    };

    await addToHistory(reqBody);

    setShow(true); // Show the modal
  };

  const deleteVideoItem = async (id) => {
    const response = await deleteVideo(id);
    if (response.status === 200) {
      setDeleteVideoStatus(true);
      toast.success("Successfully deleted video");
    } else {
      toast.error('Something went wrong');
    }
  };

const handleDragStart = (e, videoId) => {
  e.dataTransfer.setData("videoID", videoId);
  console.log("Dragging videoID:", videoId);
};


  return (
    <>
      <Card style={{ width: '16rem', height: '350px' }} draggable onDragStart={(e)=>handleDragStart(e,displayVideo.id)}>
        <Card.Img
          variant="top"
          src={displayVideo.imageUrl}
          height="250px"
          width="100%"
          style={{ padding: '5px', cursor: 'pointer' }}
          onClick={handleShow}
        />
        <Card.Body>
          <div className='container d-flex justify-content-between'>
            <Card.Title>{displayVideo.caption}</Card.Title>
            <Button variant="danger" onClick={() => deleteVideoItem(displayVideo.id)}>
              <i className="fa-solid fa-trash"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="300px"
            src={displayVideo.youtubeLink}
            title={displayVideo.caption}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
    </>
  );
}

export default VideoCard;
