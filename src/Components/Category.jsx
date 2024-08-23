import React, { useEffect, useState } from 'react';
import { addCategory, deleteCategory, getAllCategory, getAllvideosById, updateCategory } from '../Services/AllApi';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import CategoryListVideo from './CategoryListVideo';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [allCategory, setAllCategory] = useState([]);
  

  const handleAddCategory = async () => {
    if (!categoryName) {
      toast.error('Category not added');
    } else {
      const body = {
        categoryName: categoryName,
        allVideo: []
      };

      try {
        const response = await addCategory(body);
        if (response.status === 201) {
          toast.success(`${categoryName} successfully added`);
          getCategory(); // Refresh categories after adding a new one
          handleClose();
          setCategoryName('');
        } else {
          toast.error("Something went wrong.");
        }
      } catch (error) {
        console.error("Error adding category:", error);
        toast.error("An error occurred while adding the category.");
      }
    }
  };

  const getCategory = async () => {
    try {
      const response = await getAllCategory();
      setAllCategory(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
    
  }, []);

  const deleteCategoryItem = async (cateid) => {
    try {
      const result = await deleteCategory(cateid);
      if (result.status === 200) {
        getCategory();
        toast.success(`Deleted successfully`);
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("An error occurred while deleting the category.");
    }
  };

  const dragOver = (e) => e.preventDefault();

  const videoDrop = async (e, categoryId) => {
    e.preventDefault();
    const videoId = e.dataTransfer.getData("videoID");
    if (!videoId) return;

    try {
      const { data } = await getAllvideosById(videoId);
      const selectedCategory = allCategory.find((item) => item.id === categoryId);

      if (!selectedCategory) return;

      selectedCategory.allVideo.push(data);
      const response = await updateCategory(selectedCategory, categoryId);

      if (response.status === 200) {
        toast.success("Category updated successfully");
        getCategory(); // Refresh categories
      } else {
        toast.error("Failed to update category");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("An error occurred while updating the category.");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-warning' onClick={handleShow}>Add New Category</button>
      {allCategory.length > 0 ? (
        allCategory.map((item) => (
          <div
            key={item._id}
            className="m-3 border border-secondary rounded p-3"
            onDragOver={dragOver}
            onDrop={(e) => videoDrop(e, item.id)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h6 style={{ color: 'white' }}>{item.categoryName}</h6>
              <Button className="btn btn-danger" onClick={() => deleteCategoryItem(item.id)}>
                <i className="fa-solid fa-trash"></i>
              </Button>
            </div>
            {item.allVideo?.length > 0 ? (
              item.allVideo.map((card) => (
                <CategoryListVideo style={{height:'30px'}}
                  key={card._id}
                  displayVideo={card}
                  refreshCategories={getCategory} // Passing refresh function as a prop
                 
                />
              ))
            ) : (
              <p>Nothing to display</p>
            )}
          </div>
        ))
      ) : (
        <p>No Category found</p>
      )}

      <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title>
            <i className="fa-solid fa-list text-warning me-3 mb-5"></i>
            <span className='text-style'>Add Category</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          <p className='text-style'>Please fill the form</p>
          <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Category" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  );
}

export default Category;
