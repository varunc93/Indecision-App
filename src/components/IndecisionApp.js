import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

//Old Syntax
// class IndecisionApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//         this.handlePick = this.handlePick.bind(this);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.handleDeleteOption = this.handleDeleteOption.bind(this);
//         this.state = {
//             options: []
//         };
//     }

//     componentDidMount(){
//         try {
//             const json = localStorage.getItem("options");
//             const options = JSON.parse(json);
//             if(options){
//                 this.setState (() => ({ options }));
//             }
//         }
//         catch(error){

//         }
//     }

//     componentDidUpdate(prevProps, prevState){
//         if(prevState.options.length !== this.state.options.length){
//             const json = JSON.stringify(this.state.options);
//             localStorage.setItem("options", json);
//         }
//     }

//     handleDeleteOptions() {
//         this.setState(() => ({options:[]}));
//     }

//     handleDeleteOption(optionToRemove) {
//         this.setState((prevState) => ({
//             options:    prevState.options.filter((option) => {
//                 return optionToRemove !== option
//             }
//         )
//         }));
//     }

//     handlePick () {
//         const randomNum = Math.floor(Math.random()*this.state.options.length);
//         let option = this.state.options[randomNum];
//         alert(option);
//     }

//     handleAddOption(option) {
//         if(!option){
//             return "Error: Please enter a valid String!";
//         }
//         else if(this.state.options.indexOf(option) > -1){
//             return "Error: Item already exists!"
//         }

//         this.setState((prevState) => ({options: prevState.options.concat(option)}));
//     }

//     render(){
//         const subTitle = "Put your life in the hands of a computer."
//         return (
//             <div>
//                 <Header subTitle={subTitle}/>
//                 <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
//                 <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
//                 <AddOption handleAddOption={this.handleAddOption}/>
//             </div>
//         );
//     }
// }

// export default IndecisionApp;


//New Syntax with babel plugin
class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
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

    handleDeleteOptions = () => {
        this.setState(() => ({options:[]}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options:    prevState.options.filter((option) => {
                return optionToRemove !== option
            }
        )
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        let option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    };

    handleAddOption = (option) => {
        if(!option){
            return "Error: Please enter a valid String!";
        }
        else if(this.state.options.indexOf(option) > -1){
            return "Error: Item already exists!"
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    handleClearSelectedOption = (selectedOption) => {
        if(selectedOption){
            this.setState(() => ({selectedOption: undefined}));
        }
    }

    render(){
        const subTitle = "Put your life in the hands of a computer."
        return (
            <div className="background-blue">
                <Header subTitle={subTitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                        <div className="widget">
                            <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                            <AddOption handleAddOption={this.handleAddOption}/>
                        </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    }
}

export default IndecisionApp;