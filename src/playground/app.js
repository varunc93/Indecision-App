class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options  //Allows the user to add his own options at the bottom (ReactDOM)
        };
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState (() => ({ options }));
            }
        }
        catch(error){

        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }
// We can shorten the function code using arrow function property
    handleDeleteOptions() {     //=>{} returns undefined since function is empty, =>({}) returns empty object
        this.setState(() => ({options:[]}));
    }
    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     });
    // }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options:    prevState.options.filter((option) => {
                return optionToRemove !== option
            }
        )
        }));
    }

    handlePick () {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        let option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option){
            return "Error: Please enter a valid String!";
        }
        else if(this.state.options.indexOf(option) > -1){
            return "Error: Item already exists!"
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));

        // this.setState((prevState) =>    {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // });
    }

    render(){
        const subTitle = "Put your life in the hands of a computer."
        return ( //To ensure that the different React components can be modified for different webpages, we can use React Component props.
            <div>
                <Header subTitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
//Convert Header to stateless function

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {(props.subTitle) && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision app"
};

// class Header extends React.Component {
//     render(){
//         return ( //React component props are accessible through this.props
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

//Convert Action to stateless function

const Action = (props) => { //Passing props to the function is same as this.props, this is done since functions don't have access to this
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}

// class Action extends React.Component {
//     render(){ //render is not an event handler so it does not lose this keyword. .bind("context") is used to bind this keyword to event handlers
//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         );
//     }
// }
//But .bind() is expensive since has to called each time the page is rendered, instead we can override the constructor

//Convert Options to stateless function

const Options = (props) => { //same as the render function
    return (
        <div>
            {(props.options.length === 0)&&<p>You have no options!</p>}
            {
                props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption}> </Option>)
            }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
}
// class Options extends React.Component {
//     render(){ //Another way of closing tag
//         return (
//             <div>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option}> </Option>)
//                 }
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             </div>
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.state = {
            error: undefined
        }
    }
    onSubmitHandle(event) {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState (() => ({ error  //since state.error and const error have the same variable name, we do not need to write error: error
        }));
        if(!error){
            event.target.elements.option.value = "";
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitHandle}>
                    <input type="text" placeholder="new option" name="option"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

//Convert Option to stateless function

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
                }}>Remove</button>
        </div>
    );
}

// class Option extends React.Component {
//     render(){
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

ReactDOM.render(<IndecisionApp />, document.querySelector(".app"));
//ReactDOM.render(<IndecisionApp options={["Option1", "Option2"]}/>, document.querySelector(".app"));