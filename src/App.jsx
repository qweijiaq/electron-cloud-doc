import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "easymde/dist/easymde.min.css";

import FileSearch from "./components/FileSearch";
import FileList from "./components/FileList";
import defaultFiles from "./utils/defaultFiles";
import BottomBtn from "./components/BottomBtn";
import TabList from "./components/TabList";

import SimpleMDE from "react-simplemde-editor";
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
        <div className="col-9 right-panel">
          <TabList
            files={defaultFiles}
            activeId="1"
            unsaveIds="3"
            onTabClick={(id) => console.log(id)}
            onCloseTab={(id) => {
              console.log("close", id);
            }}
          />
          <SimpleMDE
            value={defaultFiles[1].body}
            onChange={(value) => {
              console.log("change", value);
            }}
            options={{
              minHeight: "515px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
