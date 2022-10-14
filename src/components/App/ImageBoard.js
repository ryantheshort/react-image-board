import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function ImageBoard({pics, addImage}) {
  return(
    <div>
      <Navbar className="nav-bar">
        <Container fluid>
        <Navbar.Brand classname="title">Ryan's Image Board</Navbar.Brand>
        </Container>
      </Navbar>
        <Container fluid classname="img-form">
        <ImageForm addImage={addImage} />
        </Container>
        <Container fluid classname='img-list'>
        <ImageList pics={pics} />
        </Container>
    </div>
  )
};

export default ImageBoard;