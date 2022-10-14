import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import { useState } from "react";
const INITIAL_IMAGES = [
    {
        url: "https://photos.google.com/photo/AF1QipPUkaAfo7QWcZJ_PHkT5a0JeLl5JoxADJSuwKRC",
        caption: "Here is my setup for long nights doing homework.",
    },
];

function ImageBoard() {
    const [images, setImages] = useState(INITIAL_IMAGES);

    const addImage = (image) => {
        setImages([image, ...images]);
    }
    return (
      <div>
        I am the ImageBoard
      <ImageForm />
      <ImageList images={images} />
      </div>
    )
};

export default ImageBoard;