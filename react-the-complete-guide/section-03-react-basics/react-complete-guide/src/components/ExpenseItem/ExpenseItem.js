import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expense.title);

    const changeTitleHandler = () => {
        setTitle(`${title}!`);
    };

    return (
        <Card>
            <div className="row justify-content-center align-items-center g-2">
                <div className="col-2">
                    <ExpenseDate date={props.expense.date} />
                </div>
                <div className="col">{title}</div>
                <div className="col-2">R$ {props.expense.price}</div>
                <button onClick={changeTitleHandler}>Change title</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;
