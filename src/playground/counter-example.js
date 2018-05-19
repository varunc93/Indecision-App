const app = document.querySelector(".app");

let count = 1;
const addOne = () => {
    count++;
    renderCount();
};
const subtractOne = () => {
    count--;
    renderCount();
};
const resetOne = () => {
    count = 0;
    renderCount();
};

const renderCount = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={resetOne}>Reset</button>
        </div>
    );

    ReactDOM.render(template2, app);
};


renderCount();