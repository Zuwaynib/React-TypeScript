import { useState } from 'react';

function ListGroup() {
  const items = ["America", "Greece", "Turkey", "Japan", "Paris"];
  const [selectedIndex, updateSelectedIndex] = useState(0);


  return (
    <>
      <h1>My List</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick= {() => updateSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
