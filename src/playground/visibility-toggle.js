const approot = document.querySelector(".app");

let flag = false;

let setFlag = () => {
    flag = !flag;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Toggle Visibility</h1>
            <button onClick={setFlag}>{flag ? "Hide Details" : "Show details"}</button>
            {(flag) && <p>Hey! These are some details you can now see!</p>}
        </div>
    );

    ReactDOM.render(template, approot);
}

render();