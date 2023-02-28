import PropTypes from 'prop-types';
import { Options, Button } from './FeedbackOptions.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Layout';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <ThemeProvider theme={theme}>
            <Options>
            {options.map(option => (
                <li key={option}>
                    <Button type="button" name={option} onClick={onLeaveFeedback}>{option}</Button>
                </li>
            ))}
        </Options>
        </ThemeProvider>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

