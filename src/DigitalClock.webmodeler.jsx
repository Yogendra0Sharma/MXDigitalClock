import { Component, createElement } from "react";
import { Clock } from "./components/Clock";

export class preview extends Component {
    render() {
        return <Clock/>;
    }
}

export function getPreviewCss() {
    return require("./ui/DigitalClock.css");
}
