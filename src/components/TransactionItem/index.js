import './index.css'

const TransactionItem = props => {
  const {transactionsValue, onDeleteItem} = props
  const {id, title, amount, activeId} = transactionsValue

  const onClickDeleteButton = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-sub-containers">
      <p className="history-subtext">{title}</p>
      <p className="history-subtext">{amount}</p>
      <p className="history-subtext">{activeId}</p>
      <div className="del-btn-container">
        <button type="button" className="del-btn" onClick={onClickDeleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="del-image"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
