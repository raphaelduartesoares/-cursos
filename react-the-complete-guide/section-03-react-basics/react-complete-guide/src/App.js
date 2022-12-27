import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseDate/NewExpense";

function App() {
    const expenses = [
        {
            title: "Seguro do carro",
            date: new Date("2022-12-15"),
            price: 1450,
        },
        {
            title: "cartão de Rebeca",
            date: new Date("2022-12-15"),
            price: 70,
        },
        {
            title: "Netflix",
            date: new Date("2022-12-05"),
            price: 34.9,
        },
    ];

    const addExpenseHandler = (expense) => {
        console.log("Adicionando despesa", expense);
    };

    return (
        <div>
            <h1>Let's get started</h1>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
