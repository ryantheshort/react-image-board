import {useState} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ImageForm({addImage}){
  const [text, setText] = useState('');
  const [src, setSrc] = useState('');
  const handleSrcInput = (event) => {
    setSrc(event.target.value);
  }
  const handleTextInput = (event) => {
    setText(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const newImage = {
      src,
      text,
    }
    addImage(newImage);
    setSrc("");
    setText("");
  };


  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId='formImgUrl'>
        <Form.Label>Image Url</Form.Label>
        <Form.Control type='url' name='urlInput' value={src} onChange={handleSrcInput} placeholder='Img Url...'></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId='imgCaption'>
        <Form.Label>Caption Image</Form.Label>
        <Form.Control type='text' value={text} name='textInput' onChange={handleTextInput} placeholder='Enter Caption...'></Form.Control>
      </Form.Group>
      <Button variant="secondary">Cancel</Button>
      <Button variant="success">Add Image</Button>
    </Form>
  )
};

export default ImageForm;