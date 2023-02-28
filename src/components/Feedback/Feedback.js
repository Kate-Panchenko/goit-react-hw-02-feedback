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

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return this.countTotalFeedback() > 0
            ? `${Math.round((good / this.countTotalFeedback()) * 100)}%`
            : '0%';
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
                    <p>Bad: {bad}</p>
                    <p>Total: {this.countTotalFeedback()} </p>
                    <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}</p>
                </div>

            </div>
        )
    }
}