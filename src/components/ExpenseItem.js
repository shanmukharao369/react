import './ExpenseItem.css';

function ExpenseItem() {

  const expenseData = new Date(2022,12,5);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 245.98;
  const LocationOfExpenditure = 'vizag'
  return (
    
    <div className = "expense-item">
    <div>{expenseData.toISOString()}</div>
    <div className="expense-item__description">
    <h2> {expenseTitle} - {LocationOfExpenditure}</h2>
    <div className="expense-item__price"> ${expenseAmount}</div>
    </div>
    </div>
    
    
    // <div>
    // <div><h1>Expense Items</h1></div>
    // <div>Food Rs 10</div>
    // <div>Petrol Rs 100</div>
    // <div>Movies Rs 200</div>
    // </div>
  );
}

export default ExpenseItem;
