import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
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
    <Layout>
        <GlobalStyle />

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ?
            (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : (<Notification message="There is no feedback"/>)}
        </Section>
    </Layout>
  );
  }
}