import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

const Expenses = (props) => {
    return (
        <Card>
            <ExpenseItem expense={props.items[0]}></ExpenseItem>
            <ExpenseItem expense={props.items[1]}></ExpenseItem>
            <ExpenseItem expense={props.items[2]}></ExpenseItem>
        </Card>
    );
};

export default Expenses;
