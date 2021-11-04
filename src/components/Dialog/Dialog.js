import DialogBox from "./DialogBox";
import { useState } from "react";

function Dialog() {
  const [showDialog, setShowDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    console.log('abort')
    setShowDialog(false);
  };

  const handleConfirmDialog = () => {
    console.log('confirm');
    setShowDialog(false);
  };


  const handleTitle = (e) => {
      setTitle(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
}
  return (
    <>
      <h2>1. Okno dialogowe</h2>
      <div>
        <div>
          <h4>Title: {title}</h4>
          <p>Description: {description}</p>
        </div>
        <button className="btn" onClick={handleShowDialog}>
          Edit
        </button>
      </div>
      <DialogBox
        show={showDialog}
        close={handleCloseDialog}
        confirm={handleConfirmDialog}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
      />
    </>
  );
}

export default Dialog;
