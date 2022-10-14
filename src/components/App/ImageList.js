
function ImageList({pics}) {
    const picItems = pics.map(({src, caption}) => (
        <li>
            <img src ={src} />
            <p>{caption}</p>
        </li>
    ));
    return (
        <ul>
            {picItems}
        </ul>
    )
      
    
};

export default ImageList;