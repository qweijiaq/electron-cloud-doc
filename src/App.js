import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-3 bg-danger left-panel">
          <h1>左侧</h1>
        </div>
        <div className="col-9 bg-primary right-panel">
          <h1>右侧</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
