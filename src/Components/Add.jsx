import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
import { uploadVideos } from '../Services/AllApi';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setVideoStatus}) {

// react bootsrap modal popup functions

    const [show, setShow] = useState(false);

    //state to store all  form field values

    const[videoDetails,setVideoDetails]=useState({
      VideoName:'',
      caption:'',
      imageUrl:'',
      youtubeLink:''
    })

      // Reset form fields after submission
  const resetForm = () => {
    setVideoDetails({
      VideoName: '',
      caption: '',
      youtubeLink: ''
    });
  };

    const getEmbededeLink =(data)=>{
      console.log("--inside getEmbededeLink method ");
      const link= `https://www.youtube.com/embed/${data.slice(-11)}`
      const image_Url =`https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
      console.log(link);

      setVideoDetails({...videoDetails,youtubeLink:link,imageUrl:image_Url})
      
      
    }

    const addVideoDetails= async ()=>{
      const {VideoName,caption,imageUrl,youtubeLink}=videoDetails
      if(!VideoName || !caption || !youtubeLink)
      {
        toast.warning("Please fill the form completely")
      }
      else{
            
console.log("Final dATA");
console.log(videoDetails);

const response =await uploadVideos(videoDetails);
console.log(response);

if(response.status===201)
{
 
  setVideoStatus(response.data)  //video status- state lifting method

  toast.success(`${response.data.caption} Suceesfully uploaded`)
   // Close the modal and reset the form after successful submission
   resetForm();
   handleClose();
}
else{
  toast.error("Something went wrong")
}





      }
      // console.log("video details");
      // console.log(videoDetails);
      
    }

    
// react bootsrap modal popup functions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 

 
  return (
    <>
    <div className='d-flex align-items-center '>

        <h5 className='text-style me-3'>Upload a New Video</h5>
        <button className='btn' onClick={handleShow}>
        <i class="fa-solid fa-cloud-arrow-up fs-5" style={{color:"white"}}></i>
        </button>

    </div>
    <Modal show={show} onHide={handleClose} data-bs-theme='dark'>

        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title><i class="fa-solid fa-film text-warning me-3"></i><span className='text-style'>Upload Video</span></Modal.Title>
        </Modal.Header>

        <Modal.Body className='bg-dark'>
            <p className='text-style'>Please fill the form </p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Video Title Name" onChange={(e)=>setVideoDetails({...videoDetails,VideoName:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})} />
       
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter Youtube Video link" onChange={(e)=>getEmbededeLink(e.target.value)} />
       
      </Form.Group>

    
     
    </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={addVideoDetails}>
            UPLOAD
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </>
  )
}

export default Add