function ImageList({items}){
    const listItems = items.map(({src, text}) => (
        <li class="img-box">
            <img src={src}/>
            <p class="img-text">{text}</p>
        </li>
    ));


    return(
      <div class="pic-list">
        <ul class="list">
          {listItems}
        </ul>
      </div>
    )
};

export default ImageList;