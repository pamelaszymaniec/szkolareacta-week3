import { useState } from "react";

function BillFunctional() {
  const tips = [5, 10, 15, 20];
  const [amount, setAmount] = useState(0);
  const [bill, setBill] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tips[0]);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSelect = (e) => {
    setSelectedTip(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const billGross = parseFloat(amount) + (parseFloat(amount) * 25) / 100;
    const calcTip = billGross * (parseFloat(selectedTip) / 100);
    setBill(parseFloat(calcTip) + parseFloat(billGross));
    setIsSubmit(true);
  };

  return (
    <>
      {isSubmit ? (
        <div>
          <p>
            <strong>Kwota netto rachunku:</strong> {amount} PLN
          </p>
          <p>
            <strong>Kwota brutto rachunku(25%):</strong>
            {parseFloat(amount) + (parseFloat(amount) * 25) / 100} PLN
          </p>
          <p>
            <strong>Napiwek:</strong>
            {((parseFloat(amount) * 25) / 100 + parseFloat(amount)) *
              (parseFloat(selectedTip) / 100)}
            PLN
          </p>
          <p>
            <strong>Całkowita kwota (kwota brutto + napiwek):</strong> {bill}
            PLN
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Podaj kwotę netto do zapłaty:</label>
            <input
              onChange={handleChange}
              type="number"
              name="amount"
              placeholder={amount}
            />
          </div>
          <div>
            <label htmlFor="tip">Wybierz wielkość napiwku:</label>
            <select onChange={handleSelect} id="tip" name="tips">
              {tips.map((tip) => (
                <option key={tip} value={tip}>
                  {tip} %
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Przelicz</button>
        </form>
      )}
    </>
  );
}

export default BillFunctional;
