function DialogBox({
  show,
  title,
  description,
  close,
  confirm,
  handleDescription,
  handleTitle,
}) {
  if (!show) {
    return <></>;
  }
  return (
    <div className="overlay">
      <div className="dialog">
        <form className="form form--column">
          <div className="form__group">
            <label htmlFor="title" className="form__label">
              Title
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="e.g. This is title"
              id="title"
              name="title"
              onChange={handleTitle}
            />
          </div>
          <div className="form__group">
            <label htmlFor="desc" className="form__label">
              Description
            </label>
            <textarea
              className="form__input"
              placeholder="e.g. This is description..."
              id="desc"
              name="desc"
              onChange={handleDescription}
            />
          </div>
        </form>
        <div className="dialog__footer">
          <button className="btn" onClick={close}>
            Abort
          </button>
          <button className="btn btn--green m-l-10" onClick={confirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
