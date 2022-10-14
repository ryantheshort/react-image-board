import {useState} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ImageForm({addImage}){
  const [name, setName] = useState('');
  const handleInput = (event) => {
    setName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newPic = {}
    addImage(newPic);
    setName('');
  };


  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group classname="mb-3" controlId='formImgUrl'>
        <Form.Label>Image Url</Form.Label>
        <Form.Control type='text' placeholder='Img Url...'></Form.Control>
      </Form.Group>
      <Form.Group classname="mb-3" controlId='imgCaption'>
        <Form.Label>Caption Image</Form.Label>
        <Form.Control type='text' placeholder='Enter Caption...'></Form.Control>
      </Form.Group>
      <Button variant="secondary">Cancel</Button>
      <Button variant="success">Add Image</Button>
    </Form>
  )
};

export default ImageForm;