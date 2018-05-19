class Counter extends React.Component{ //state allows the object to be rendered when an event occurs
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.state = {
            count: props.count
        }
    }

    handleAddOne () {
        this.setState((prevState) =>
            {
                return {
                    count: prevState.count + 1
                }
            }
        );
    }

    handleReset () { //new setState() syntax
        this.setState(() =>
            {
                return {
                    count: 0
                }
            }
        );

    //Older setState() syntax
    // this.setState({
    //     count: 0
    // });
    // this.setState({
    //     count: this.state.count + 1
    // });
    //Issue is that setState is asynchronous and that means, instead of getting count as 1 (count = 0 then count + 1), we get current count + 1, since before count is set to 0, we take the current state.

    }

    handleMinusOne () {
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleMinusOne}>-1</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.querySelector(".app"));