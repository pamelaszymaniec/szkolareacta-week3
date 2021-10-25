function Textarea({ bgColor, color, borderSize, borderRadius, borderColor }) {
  const textAreaStyle = {
    backgroundColor: bgColor,
    color,
    borderColor,
    borderWidth: borderSize,
    borderRadius,
    marginTop: 20,
    width: "100%",
  };
  return <textarea rows="10" style={textAreaStyle}></textarea>;
}

export default Textarea;
