import { Employee } from "./Employee"

export function Employees({ employees }) {
  return (
    <table className="Employees">
      <thead>
        <tr>
          <th>Employees</th>
          <th>Info</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </tbody>
    </table>
  );
}

export default Employees;
