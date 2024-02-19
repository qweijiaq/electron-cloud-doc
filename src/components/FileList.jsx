import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const FileList = ({ files, onFileClick, onSaveEdit, onFileDelete }) => {
  const [editStatus, setEditStatus] = useState(false);
  const [value, setValue] = useState("");

  const closeSearch = (e) => {
    e.preventDefault();
    setEditStatus(false);
    setValue("");
  };

  useEffect(() => {
    const handleInputEvent = (e) => {
      const { keyCode } = e;
      if (keyCode === 13 && editStatus) {
        const editItem = files.find((file) => file.id === editStatus);
        onSaveEdit(editItem.id, value);
        setEditStatus(false);
        setValue("");
      } else if (keyCode === 27 && editStatus) {
        closeSearch(e);
      }
    };
    document.addEventListener("keyup", handleInputEvent);
    return () => {
      document.removeEventListener("keyup", handleInputEvent);
    };
  });

  return (
    <ul className="list-group-item bg-light row d-flex align-items-center file-item mx-0">
      {files.map((file) => (
        <li
          className="list-group-item bg-light row d-flex align-items-center file-item mx-0"
          key={file.id}
        >
          {file.id !== editStatus && (
            <>
              <span className="col-2">
                <FontAwesomeIcon size="lg" icon={faMarkdown} />
              </span>
              <span
                className="col-8 c-link"
                onClick={() => {
                  onFileClick(file.id);
                }}
              >
                {file.title}
              </span>
              <button
                type="button"
                className="icon-button col-1"
                onClick={() => {
                  setEditStatus(file.id);
                  setValue(file.title);
                }}
              >
                <FontAwesomeIcon icon={faEdit} title="编辑" size="lg" />
              </button>
              <button
                type="button"
                className="icon-button col-1"
                onClick={() => {}}
              >
                <FontAwesomeIcon icon={faTrash} title="删除" size="lg" />
              </button>
            </>
          )}
          {file.id === editStatus && (
            <>
              <span className="col-10">
                <input
                  className="form-control"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </span>
              <button
                type="button"
                className="icon-button col-2"
                onClick={closeSearch}
              >
                <FontAwesomeIcon icon={faClose} title="关闭" size="lg" />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

FileList.propTypes = {
  files: PropTypes.array,
  onFileClick: PropTypes.func,
  onFileDelete: PropTypes.func,
  onSaveEdit: PropTypes.func,
};

export default FileList;
