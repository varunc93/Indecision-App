import React from "react";

// const Option = (props) => {
//     return (
//         <div>
//             {props.optionText}
//             <button onClick={(e) => {
//                 props.handleDeleteOption(props.optionText);
//                 }}>Remove</button>
//         </div>
//     );
// }

//Shorthand notation for above function

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button className="button button--submit" onClick={(e) => {
            props.handleDeleteOption(props.optionText);
        }}>Remove</button>
    </div>
);

export default Option;