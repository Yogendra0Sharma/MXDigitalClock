import { Component, createElement } from "react";
import classNames from "classnames";
export class Clock extends Component {
    state = {
        time: new Date()
    };
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    render() {
        return (
            <div >
                <p className={this.props.className}
            style={this.props.style}>{this.state.time.toLocaleTimeString() } </p>
            </div>
        );
    }
}
