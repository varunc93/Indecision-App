import React from 'react';

//Old Syntax
// export default class AddOption extends React.Component {
//     constructor(props){
//         super(props);
//         this.onSubmitHandle = this.onSubmitHandle.bind(this);
//         this.state = {
//             error: undefined
//         }
//     }
//     onSubmitHandle(event) {
//         event.preventDefault();
//         const option = event.target.elements.option.value.trim();
//         const error = this.props.handleAddOption(option);
//         this.setState (() => ({ error }));
//         if(!error){
//             event.target.elements.option.value = "";
//         }
//     }
//     render(){
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.onSubmitHandle}>
//                     <input type="text" placeholder="new option" name="option"/>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

//New Syntax with babel plugin which removes the need for this binding
export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState (() => ({ error }));
        if(!error){
            event.target.elements.option.value = "";
        }
    };
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="new option" name="option"/>
                    <button className="button">Submit</button>
                </form>
            </div>
        );
    }
}
