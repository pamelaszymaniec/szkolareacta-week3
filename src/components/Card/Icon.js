import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function Icon({ icon, style, onClick }) {
  return (
    <button onClick={onClick} className="Icon" style={style}>
      <FontAwesomeIcon style={{ width: "20", height: "20" }} icon={icon} />
    </button>
  );
}

export default Icon;
