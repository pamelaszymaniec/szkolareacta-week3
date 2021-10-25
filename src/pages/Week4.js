import React, { createRef } from "react";
import BillCalc from "../components/BillCalc/BillCalc";
import {RefButton} from "../components/RefButton/RefButton"
import ReactHookForm from "../components/ValidationForm/ReactHookForm";
import ValidationForm from "../components/ValidationForm/ValidationForm";

function Week4() {
  const ref = createRef();
  const handleMouseOver = () => {
    const currentButton = ref.current;
    currentButton.style.background="#f00";
  }
  return (
    <>
      <h1>Tydzień 4. Zdarzenia, Refy, Bindowanie</h1>
      <BillCalc />
      <h2>2. Walidacja formularzy - do poprawy</h2>
      <ValidationForm />
      <h2>3. Walidacja formularzy - React Hook Form</h2>
      <ReactHookForm />
      <h2>4. Kalkulator wydatków</h2>
      <a href="/budgetcalc">tutaj</a>
      <h2>5. Zadanie 5 (button)</h2>
      <RefButton ref={ref} text="Hello, hover me!" handleMouseOver={handleMouseOver}/>
    </>
  );
}

export default Week4;
