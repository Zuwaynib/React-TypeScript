import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const items = ["America", "Greece", "Turkey", "Japan", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Alert />
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
