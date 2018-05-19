const app2 = document.querySelector(".app");

const app = {
    title: "IndecisionApp",
    subtitle: "I can't decide",
    options: []
};
const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;

    if(option){
        app.options.push(option);
        event.target.elements.option.value = "";
        renderfn();
    }
};

const removeAll = () => {
    app.options.length = 0;
    renderfn();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const renderfn= () => {
    const template = (
        <div>
            <h1>{app2.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Submit</button>
            </form>
        </div>
    );
    ReactDOM.render(template, app2);
};

renderfn();