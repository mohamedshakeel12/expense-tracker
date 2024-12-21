import { useState } from "react"

const ExpenseForm = (props)=>{
  const {addExpense} = props
  const [title, setTitle] = useState('')
  const [amount,setAmount] = useState()
  const [errors,setErrors]= useState({})

  const handleSubmit = (e)=>{
    e.preventDefault()
    let err = {}
    if(title.length < 3){
      err.title = '*Title should be atleast 3 characters long'
    }
    if(!amount){
      err.amount = '*Enter the valid amount'
    }
    if(Object.keys(err).length>0){
      setErrors({...err})
      return
    }

    addExpense(title,amount)
    setTitle('')
    setAmount('')
  }
  const handleTitleChange =(e)=>{
    setTitle(e.target.value)
    setErrors({...errors,title:''})
  }
  const handleAmountChange =(e)=>{
    setAmount(parseInt(e.target.value))
    setErrors({...errors,amount:''})
  }
    return(
        <div className="expense-form">
        <form className="exp-list" onSubmit={handleSubmit}>
        <label>Title : </label>
          <input type="text" id ='title'value ={title} onChange={handleTitleChange} />
          {errors.title && <div className="error">{errors.title}</div>}
         <label>Amount :</label>
          <input type="number" id='amount' value={amount} onChange={handleAmountChange} />
          {errors.amount && <div className="error">{errors.amount}</div>}
          <button className="taskbtn"type="submit">AddTask</button>
        </form>
    </div>
    )
}
export default ExpenseForm