import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items = ["America", "Greece", "Turkey", "Japan", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>
        Help Me
      </Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click Me
      </Button>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
