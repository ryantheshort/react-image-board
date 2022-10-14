import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function ImageBoard({items, addImage}) {
  return(
    <div>
      <Navbar className="nav-bar">
        <Container fluid>
        <Navbar.Brand className="title">Ryan's Image Board</Navbar.Brand>
        </Container>
      </Navbar>
        <Container fluid className="img-form">
        <ImageForm addImage={addImage} />
        </Container>
        <Container fluid className='img-list'>
        <ImageList items={items} />
        </Container>
    </div>
  )
};

export default ImageBoard;