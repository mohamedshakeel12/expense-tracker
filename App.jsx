import { useEffect, useState } from "react"
import ExpenseItem from "./Components/ExpenseItem"
import ExpenseForm from "./Components/ExpenseForm"
import axios from "axios"

const App = () =>{
  const [expense,setExpense] = useState(
[
  {id : 1,title:'Food',amount:50},
  {id : 2,title:'Movie',amount:300},
  {id : 3,title:'Rent',amount:-100},
  {id : 4,title:'Shoping',amount:500}
 ])
// useEffect(() => {
//   axios.get("https://expensetracker-cn58.onrender.com/get-data")
//   .then(res => {
//     console.log(res.data)
//     setExpense(res.data)
//   })
//   .catch(err => console.log(err))
// },)
  
  const addExpense = (title,amount)=>{
    const nextId = expense[expense.length -1].id+1
    setExpense([...expense, {id: nextId,title: title, amount: amount}])
  }

  const deleteExpense = (id) => {
    setExpense(expense.filter((exp) => exp.id !== id))
  }
 let income = 0
 let expenses = 0
 expense.forEach((exp)=>{
  if(exp.amount > 0){
    income += exp.amount
  }else{
     expenses += exp.amount
  }
 })
 let balance = income+expenses
  return(
    <>
    <div>
      <center><div>Expense Tracker</div></center>
      <div className="balance">Balance : {balance}</div>
      <div className="income-expense-container">
        <div className="income">
        <span className="title">Income</span>
        <span>{income}</span>
        </div>
      <div className="block"></div>
      <div className="expense">
        <span className="title">Expense</span>
        <span>{expenses}</span>
      </div>
    </div>
    <ExpenseForm  addExpense={addExpense}/>
    </div>
    {expense.map((expense)=>{
    return <ExpenseItem id={expense.id} title={expense.title} amount={expense.amount} deleteExpenses = {deleteExpense}/> 
  })}
    </>
 )
}
export default App