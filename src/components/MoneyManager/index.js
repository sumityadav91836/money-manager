import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onChangeSelectItem = () => {
    this.setState({
      //   activeId: event.target.value,
    })
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {title, amount} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  onDeleteItem = uniqueId => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTransection => eachTransection.id !== uniqueId,
      ),
    }))
  }

  render() {
    const {title, amount, transactionsList} = this.state
    return (
      <div className="main-container">
        <div className="name-card">
          <h1 className="username">Hi, Richard</h1>
          <p className="tagline">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <ul className="money-details-container">
          <MoneyDetails />
        </ul>

        <div className="transection-container">
          <div className="add-transection-card">
            <h1 className="card-heading">Add Transaction</h1>
            <form onSubmit={this.onClickAddButton}>
              <div className="input-elements">
                <label className="label-element" htmlFor="title">
                  TITLE
                </label>
                <input
                  value={title}
                  placeholder="TITLE"
                  className="input-element"
                  onChange={this.onChangeTitle}
                  id="title"
                  type="text"
                />
              </div>
              <div className="input-elements">
                <label className="label-element" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  value={amount}
                  onChange={this.onChangeAmount}
                  placeholder="AMOUNT"
                  className="input-element"
                  id="amount"
                  type="text"
                />
              </div>
              <div className="input-elements">
                <label htmlFor="type" className="label-element">
                  TYPE
                </label>
                <select
                  id="type"
                  className="input-element"
                  onChange={this.onChangeSelectItem}
                >
                  {transactionTypeOptions.map(eachTransection => (
                    <option
                      value={eachTransection.optionId}
                      key={eachTransection.optionId}
                    >
                      {eachTransection.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1 className="history">History</h1>
            <div className="container">
              <p className="history-text">Title</p>
              <p className="history-text">Amount</p>
              <p className="history-text">Type</p>
            </div>
            <ul className="history-details-container">
              {transactionsList.map(eachTransection => (
                <TransactionItem
                  key={eachTransection.id}
                  transactionsValue={eachTransection}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
