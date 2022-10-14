import { useState } from 'react';

const INITIAL_STATE = {
  caption: "",
  url: "",
};

function ImageForm({ addImage}){
  
    const [state, setState] = useState(INITIAL_STATE);
      // const [caption, setCaption] = useState("");
      // const [url, setUrl] = useState("");

      
      

      const handleUrl = (e) => {
        setUrl(e.target.value);
      };
      const handleInput = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        addImage(state);
        setState(INITIAL_STATE);
      }
    return(
      <form onSubmitt={handleSubmit}>
        <input
          type="text"
          name="caption"
          value={state.caption}
          onChange={handleInput}
        
        <input type="url" name="url" value={state.url} onChange={handleInput} /> 
        <button type="submit">Add Image</button> 
      </form>
);
}

export default ImageForm;