import { useEffect } from "react";
import Alert from "./Alert";

function Snackbar({ severity, position, autoHideDuration, handleClose }) {
  useEffect(() => {
    handleClose(autoHideDuration);
  });

  return (
    <div className={`snackbar snackbar--${position}`}>
      <Alert severity={severity} />
    </div>
  );
}

export default Snackbar;
