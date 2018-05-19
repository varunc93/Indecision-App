class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            flag : false
        };
    }
    handleClick () {
        this.setState((prevState) => {
            return {
                flag: !prevState.flag
            }
        });
    }
    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleClick}>{this.state.flag ? "Hide Details" : "Show Details"} </button>
                {(this.state.flag) && <p>Now you can see this paragraph!</p>}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.querySelector(".app"));