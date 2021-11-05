import { useState } from "react";
import Snackbar from "./Snackbar";

function SnackbarTask() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleShowSnackbar = () => {
    setShowSnackbar(true);
  };
  const handleClose = (autoHideDuration) => {
    setTimeout(() => {
      setShowSnackbar(false);
    }, autoHideDuration);
  };
  return (
    <>
      <h2>2. Snackbar</h2>
      <button className="btn" onClick={handleShowSnackbar}>
        Open simple snackbar
      </button>
      {showSnackbar && (
        <Snackbar
          severity="success"
          position="center-bottom"
          autoHideDuration={6000}
          handleClose={handleClose}
        />
      )}
    </>
  );
}

export default SnackbarTask;
