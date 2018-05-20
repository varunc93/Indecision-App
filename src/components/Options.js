import React from "react";
import Option from './Option';

const Options = (props) => {
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

export default Options;
