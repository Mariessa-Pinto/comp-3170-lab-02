function News(props) {
  return (
    <div className="entirePage">
      <div className="titleBox">
        <h1 className="title">Books, Books and More Books</h1>
      </div>
      <div className="listOutline">
        <ul>{props.children}</ul>
      </div>
    </div>
  );
}

export default News;
