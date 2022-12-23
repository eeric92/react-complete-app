import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    const noExpenses = <div>
        <h1 className="expenses-list__fallback">Found no expenses</h1>
        <h3 className={"expenses-list__fallback"}>You can add a new expense by clicking on Add New Expense button</h3>
    </div>

    if (props.items.length === 0) {
        return noExpenses;
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
