import React from "react";

const Dumb = (props) => (
    <div>
        <h1>{props.aProp || "Default Value"}</h1>
        <button onClick={props.onClick}>Click Me</button>
    </div>
)

export default Dumb;
