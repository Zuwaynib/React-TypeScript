function ListGroup() {
  const items = ["America", "Greece", "Turkey", "Japan", "Paris"];

  if (items.length === 0) return <p>No list item found</p>;
  return (
    <>
      <h1>My List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
