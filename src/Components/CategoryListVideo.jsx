import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteCategoryBox } from '../Services/AllApi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function CategoryListVideo({ displayVideo, refreshCategories }) {
  const deleteVideoBox = async (id) => {
    try {
      const response = await deleteCategoryBox(id);
      if (response.status === 200) {
        
        refreshCategories(); // Refresh categories after deleting
        toast.success("Successfully deleted video");
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.error("Error deleting video:", error);
      toast.error("An error occurred while deleting the video.");
    }
  };

  const handleShow = () => {
    console.log("Show video details or modal here.");
  };

  return (
    <Card style={{ width: '10rem', height: '20px' }}>
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
          <Button variant="danger" onClick={() => deleteVideoBox(displayVideo.id)}>
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
      </Card.Body>
      <ToastContainer position="top-center" autoClose={2000} />
    </Card>
  );
}

export default CategoryListVideo;
