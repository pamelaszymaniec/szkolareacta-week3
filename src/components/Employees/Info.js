export function Info({ info }) {
    const { age, salary, position } = info;
    return (
      <>
        <p>Age: {age}</p>
        <p>Salary: {salary}</p>
        <p>Position: {position}</p>
      </>
    );
  }

  export default Info;