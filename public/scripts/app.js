"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options //Allows the user to add his own options at the bottom (ReactDOM)
        };
        return _this;
    }
    // We can shorten the function code using arrow function property


    _createClass(IndecisionApp, [{
        key: "handleDeleteOptions",
        value: function handleDeleteOptions() {
            //=>{} returns undefined since function is empty, =>({}) returns empty object
            this.setState(function () {
                return { options: [] };
            });
        }
        // handleDeleteOptions() {
        //     this.setState(() => {
        //         return {
        //             options: []
        //         }
        //     });
        // }

    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) {
                return "Error: Please enter a valid String!";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Error: Item already exists!";
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });

            // this.setState((prevState) =>    {
            //     return {
            //         options: prevState.options.concat(option)
            //     }
            // });
        }
    }, {
        key: "render",
        value: function render() {
            var subTitle = "Put your life in the hands of a computer.";
            return (//To ensure that the different React components can be modified for different webpages, we can use React Component props.
                React.createElement(
                    "div",
                    null,
                    React.createElement(Header, { subTitle: subTitle }),
                    React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                    React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions, handleDeleteOption: this.handleDeleteOption }),
                    React.createElement(AddOption, { handleAddOption: this.handleAddOption })
                )
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
    //Convert Header to stateless function

};var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};

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

var Action = function Action(props) {
    //Passing props to the function is same as this.props, this is done since functions don't have access to this
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.handlePick },
            "What should I do?"
        )
    );
};

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

var Options = function Options(props) {
    //same as the render function
    return React.createElement(
        "div",
        null,
        props.options.map(function (option) {
            return React.createElement(
                Option,
                { key: option, optionText: option, handleDeleteOption: props.handleDeleteOption },
                " "
            );
        }),
        React.createElement(
            "button",
            { onClick: props.handleDeleteOptions },
            "Remove All"
        )
    );
};
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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onSubmitHandle = _this2.onSubmitHandle.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "onSubmitHandle",
        value: function onSubmitHandle(event) {
            event.preventDefault();
            var option = event.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error //since state.error and const error have the same variable name, we do not need to write error: error
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.onSubmitHandle },
                    React.createElement("input", { type: "text", placeholder: "new option", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Submit"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

//Convert Option to stateless function

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                } },
            "Remove"
        )
    );
};

// class Option extends React.Component {
//     render(){
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector(".app"));
//ReactDOM.render(<IndecisionApp options={["Option1", "Option2"]}/>, document.querySelector(".app"));
