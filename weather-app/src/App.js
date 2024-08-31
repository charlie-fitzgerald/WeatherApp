import Content from "./components/content"
const api = {
  key: "4213f55cb14fe7e4acd06dbf54f8ea21",
  base: `https://api.openweathermap.org/data/2.5/`
}

function App() {
  return (
    <div className="App">
      <Content />
    </div>
  );
}

export default App;
