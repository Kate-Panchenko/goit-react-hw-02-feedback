import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Layout';
import { Stats } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ThemeProvider theme={theme}>
        <Stats>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total} </li>
            <li>Positive Feedback: {positivePercentage}</li>
        </Stats>
        </ThemeProvider>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
}
