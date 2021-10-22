function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
    const inputStyle = {
      backgroundColor: bgColor,
      color,
      borderColor,
      borderWidth: borderSize,
      borderRadius,
      marginTop: 20,
      width: '100%'
    };
    return <input style={inputStyle}></input>;
  }

  export default Input;
