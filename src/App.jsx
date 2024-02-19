import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import defaultFiles from "./utils/defaultFiles";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6 left-panel">
          <FileSearch onFileSearch={() => {}} />
          <FileList
            files={defaultFiles}
            onFileClick={(id) => console.log(id)}
            onFileDelete={(id) => console.log("delete", id)}
            onSaveEdit={(id, value) => console.log("save", id, value)}
          />
        </div>
        <div className="col-6 bg-primary right-panel">
          <h1>右侧</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
