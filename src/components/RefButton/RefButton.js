import { forwardRef } from "react";

export const RefButton = forwardRef(({ text, handleMouseOver }, ref) => {
  const style = {
    padding: 20,
    backgroundColor: '#ebebeb',
    margin: 20
  };
  return (
    <>
      <button style={style} ref={ref} onMouseOver={handleMouseOver}>
        {text}
      </button>
    </>
  );
});
