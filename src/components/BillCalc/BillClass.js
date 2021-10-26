import React from "react";

class BillClass extends React.Component {
  state = {
    amount: 0,
    tips: [5, 10, 15, 20],
    selectedTip: 0,
    bill: 0,
    isSubmit: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, selectedTip } = this.state;
    const billGross = parseFloat(amount) + (parseFloat(amount) * 25) / 100;
    const calcTip = billGross * (parseFloat(selectedTip) / 100);
    const billTotal = parseFloat(calcTip) + parseFloat(billGross);
    this.setState({ bill: billTotal, isSubmit: true });
  };

  componentDidMount() {
    const {tips} = this.state;
    this.setState({selectedTip: tips[0]})
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ amount: e.target.value });
  };

  handleSelect = (e) => {
    console.log(e.target.value)
    this.setState({ selectedTip: e.target.value });
  };

  render() {
    const { tips, defaultTip, selectedTip, amount,  bill, isSubmit } = this.state;
    return (
      <>
        {isSubmit ? (
          <div>
            <p>
              <strong>Kwota netto rachunku:</strong> {amount} PLN
            </p>
            <p>
              <strong>Kwota brutto rachunku(25%):</strong>{" "}
              {parseFloat(amount) + (parseFloat(amount) * 25) / 100} PLN
            </p>
            <p>
              <strong>Napiwek:</strong>
              {((parseFloat(amount) * 25) / 100 + parseFloat(amount)) *
                (parseFloat(selectedTip) / 100)}
              PLN
            </p>
            <p>
              <strong>Całkowita kwota (kwota brutto + napiwek):</strong> {bill}{" "}
              PLN
            </p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Podaj kwotę netto do zapłaty:</label>
              <input
                onChange={this.handleChange}
                type="number"
                name="amount"
                placeholder={amount}
              />
            </div>
            <div>
              <label htmlFor="tip">Wybierz wielkość napiwku:</label>
              <select onChange={this.handleSelect} value={selectedTip} id="tip" name="tips">
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
}

export default BillClass;
