import { MouseEvent } from "react";

function ListGroup() {
  const items = ["America", "Greece", "Turkey", "Japan", "Paris"];

  const handleEvent = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>My List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleEvent}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
