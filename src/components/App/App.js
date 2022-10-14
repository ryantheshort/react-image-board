import {useState} from 'react';
import ImageBoard from './ImageBoard';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const INITIAL_PICS = [
    {
        src: "https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg",
        text: "Pretty clouds.",
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg",
        text: "Cool mountains.",
    },
    {
        src: "https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_1280.jpg",
        text: "Peaceful lake.",
    }
];

function App() {
  const [items, setItems] = useState(INITIAL_PICS);

  const addImage = (newItem) => {
    setItems([...items, newItem])
  }
  return (
    <div>

        <ImageBoard items={items} addImage={addImage}/>
    </div>
  );


}

export default App;