import React from "react";

const Events = () => {
    const hangleClick = (e) => {
        console.log(e);
        alert("clicou");
    };

    const renderSomething = (isTrue) => {
        if (isTrue) {
            return <h1>É verdadeiro</h1>;
        } else {
            return <h1>É falso</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={hangleClick}>Clique aqui </button>
            </div>
            <div>
                <button onClick={() => console.log("clicando também")}>Clique aqui também </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;
