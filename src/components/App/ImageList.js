


function ImageList({ images }) {
    const imagesHTML = images.map((image, index) => (
        <li>
            <p>{image.caption}</p>
            <img src={image.url} alt="my desk setup" />
        </li>
    ));

    return <ul>{imagesHTML}</ul>
        
      
    
}

export default ImageList;