import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    
    <div className = "expense-item">
    <div>{props.item.date.toISOString()}</div>
    <div className="expense-item__description">
    <h2> {props.item.title} - {props.item.locationOfExpenditure} </h2>
    <div className="expense-item__price"> ${props.item.amount}</div>
    </div>
    </div>
    
    
  
  );
}

export default ExpenseItem;
