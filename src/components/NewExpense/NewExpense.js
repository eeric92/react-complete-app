import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const isEditingFalse = (
    <div className={"new-expense"}>
      <button onClick={setIsEditing}>Add New Expense</button>
    </div>
  );

  const onCancelHandlder = () => {
    setIsEditing(false);
  };

  const isEditingTrue = (
    <div className={"new-expense"}>
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={onCancelHandlder}
      />
    </div>
  );

  if (isEditing) {
    return isEditingTrue;
  } else {
    return isEditingFalse;
  }
};

export default NewExpense;
