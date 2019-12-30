import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { Clock } from "./components/Clock";
import "./ui/DigitalClock.css";

class DigitalClock extends Component {
    render() {
        return <Clock style={this.props.style} className={this.props.class}/>;
    }
}

export default hot(DigitalClock);
