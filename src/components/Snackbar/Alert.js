function Alert({ severity }) {
  return (
    <p className={`snackbar__alert snackbar__alert--${severity}`}>
      This is snaaaaackbar 🐍!
    </p>
  );
}

export default Alert;
