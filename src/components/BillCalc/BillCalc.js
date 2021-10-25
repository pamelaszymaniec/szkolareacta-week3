import BillClass from "./BillClass";
import BillFunctional from "./BillFunctional";

function BillCalc() {
  return (
    <div>
      <h2>1. Przeliczanie rachunku w restauracji</h2>
      <h3>Komponent klasowy:</h3>
      <BillClass />
      <h3>Komponent funkcyjny:</h3>
      <BillFunctional />
    </div>
  );
}

export default BillCalc;
