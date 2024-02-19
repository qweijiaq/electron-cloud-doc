import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import defaultFiles from "./utils/defaultFiles";
import BottomBtn from "./components/BottomBtn";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App container-fluid px-0">
      <div className="row g-0">
        <div className="col-md-3 bg-light left-panel">
          <FileSearch onFileSearch={() => {}} />
          <FileList
            files={defaultFiles}
            onFileClick={(id) => console.log(id)}
            onFileDelete={(id) => console.log("delete", id)}
            onSaveEdit={(id, value) => console.log("save", id, value)}
          />
          <div className="row g-0 button-group">
            <div className="col">
              <BottomBtn
                text="新建"
                colorClass="btn-primary"
                icon={faPlus}
                onBtnClick={() => {}}
              />
            </div>
            <div className="col">
              <BottomBtn
                text="导入"
                colorClass="btn-success"
                icon={faFileImport}
                onBtnClick={() => {}}
              />
            </div>
          </div>
        </div>
        <div className="col-9 bg-primary right-panel">
          <h1>右侧</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
