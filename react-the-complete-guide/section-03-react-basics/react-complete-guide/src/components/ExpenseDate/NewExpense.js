import { useState } from "react";

const NewExpense = (props) => {
    const [inputTitleValue, setTitleValue] = useState("");
    const [inputPriceValue, setPriceValue] = useState("");
    const [inputDateValue, setDateValue] = useState("");
    const titleChangeHandler = (event) => {
        setTitleValue(event.target.value);
    };
    const priceChangeHandler = (event) => {
        setPriceValue(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDateValue(event.target.value);
    };

    // const [formNewExpenseValues, setFormNewExpenseValues] = useState({
    //     inputTitleValue: "",
    //     inputPriceValue: "",
    //     inputDateValue: "",
    // });
    // const titleChangeHandler = (event) => {
    //     setFormNewExpenseValues((prevState) => {
    //         return {
    //             ...prevState,
    //             inputTitleValue: event.target.value,
    //         };
    //     });
    // };
    // const priceChangeHandler = (event) => {
    //     setFormNewExpenseValues((prevState) => {
    //         return {
    //             ...prevState,
    //             inputPriceValue: event.target.value,
    //         };
    //     });
    // };
    // const dateChangeHandler = (event) => {
    //     setFormNewExpenseValues((prevState) => {
    //         return {
    //             ...prevState,
    //             inputDateValue: event.target.value,
    //         };
    //     });
    // };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(inputDateValue);

        const expense = {
            title: inputTitleValue,
            price: inputPriceValue,
            date: new Date(inputDateValue),
        };

        console.log(expense);

        setTitleValue("");
        setPriceValue("");
        setDateValue("");

        props.onAddExpense(expense);
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="expense-title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="expense-title"
                        value={inputTitleValue}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="expense-price" className="form-label">
                        Price
                    </label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        className="form-control"
                        id="expense-price"
                        value={inputPriceValue}
                        onChange={priceChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="expense-price" className="form-label">
                        Date
                    </label>
                    <input
                        type="date"
                        min="2020-01-01"
                        max="2023-12-31"
                        className="form-control"
                        id="expense-price"
                        value={inputDateValue}
                        onChange={dateChangeHandler}
                    />
                </div>
                <div>
                    <button className="btn btn-primary" type="submit">
                        Add expense
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewExpense;
