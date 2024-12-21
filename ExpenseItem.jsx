const ExpenseItem = (props) => {
    const {id,title,amount,deleteExpenses} = props
    const handleDelete = () => {
        deleteExpenses(id)
    }
    return (
        <>
        <div className="expense-item-container">
        <div className={`expense-item ${amount>0 ? 'positive' : 'negative'}`}>
            <div className="expense-title">{title}</div>
            <div className="expense-amount">{amount}</div>
        </div>
        <button className="delete-btn" onClick={handleDelete} >delete</button>
        </div>
        </>
    )
}

export default ExpenseItem