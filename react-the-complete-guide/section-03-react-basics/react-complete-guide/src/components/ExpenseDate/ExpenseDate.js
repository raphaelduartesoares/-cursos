const ExpenseDate = (props) => {
    const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
    const month = props.date.toLocaleString("pt-BR", { month: "short" });
    const year = props.date.getFullYear();

    return (
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    );
};

export default ExpenseDate;
