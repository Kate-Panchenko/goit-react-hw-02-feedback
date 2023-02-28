import { Component } from "react";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";


export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    handleFeedback = evt => {
        const option = evt.target.name;
        if (option) {
            this.setState(prevState => ({
                [option]: prevState[option] + 1,
        }))
        }
    }

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        return (
            <div>
                <h2>Please leave feedback</h2>
                <FeedbackOptions options={options} handleFeedback={this.handleFeedback} />
                <h2>Statistics</h2>
                <div>
                    <p>Good: { good }</p>
                    <p>Neutral: { neutral }</p>
                    <p>Bad: { bad }</p>
                </div>
            </div>
        )
    }
}