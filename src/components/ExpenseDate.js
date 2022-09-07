import './ExpenseDate.css'

function ExpenseDate(props) {
    const getMonth = props.date.toLocaleString("en-US", {month: 'long'})
    const getDay = props.date.toLocaleString("en-US", {day: '2-digit'})
    const getYear = props.date.getFullYear()

    return (
        <div className={"expense-date"}>
            <div className={"expense-date__month"}>{getMonth}</div>
            <div className={"expense-date__day"}>{getDay}</div>
            <div className={"expense-date__year"}>{getYear}</div>
        </div>
    )
}

export default ExpenseDate
