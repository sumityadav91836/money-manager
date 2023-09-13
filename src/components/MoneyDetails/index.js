import './index.css'

const MoneyDetails = () => (
  <li className="list-items">
    <div className="amount-container balance-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="container-image"
      />
      <div className="balance-cont">
        <p className="text">Your Balance</p>
        <p className="rupees" data-testid="balanceAmount">
          0
        </p>
      </div>
    </div>

    <div className="amount-container income-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="container-image"
      />
      <div className="balance-cont">
        <p className="text">Your Income</p>
        <p className="rupees" data-testid="incomeAmount">
          0
        </p>
      </div>
    </div>

    <div className="amount-container expense-background">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="container-image"
      />
      <div className="balance-cont">
        <p className="text">Your Expenses</p>
        <p className="rupees" data-testid="expensesAmount">
          0
        </p>
      </div>
    </div>
  </li>
)

export default MoneyDetails
