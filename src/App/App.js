import logo from './logo.svg';
import './App.css';

function App() {
  function ImageForm(){
    return(
      <form>
        ...
      </form>
    )
};

function ImageList(){
    return(
      <ul>
        ...
      </ul>
    )
};

function ImageBoard() {
    return(
      <div>
        <ImageForm />
        <ImageList />
      </div>
    )
};
}

export default App;
