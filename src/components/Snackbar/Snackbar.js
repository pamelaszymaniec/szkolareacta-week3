import { useEffect } from "react";

function Snackbar({ autoHideDuration, handleClose }) {
  useEffect(() => {
    handleClose(autoHideDuration);
  });

  return <div className="snackbar">It's me Snaaaaaackbar 🐍</div>;
}

export default Snackbar;
