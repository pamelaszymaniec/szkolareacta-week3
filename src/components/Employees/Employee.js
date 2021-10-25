import { useState } from "react";
import { Info } from "./Info";

export function Employee({ employee }) {
  const { name } = employee;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <tr>
      <td onClick={handleOnClick}>{name}</td>
      <td>{!isCollapsed ? <Info info={employee} /> : " "}</td>
    </tr>
  );
}

export default Employee;
