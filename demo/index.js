import React from "react";
import ReactDOM from "react-dom";
import { Draggable } from "../src";

class App extends React.Component {
    render() {
        return (
            <Draggable>
                <div style={{ "background": "red", "width": "100px", "height": "100px" }}></div>
            </Draggable>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById("root")
)