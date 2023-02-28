import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleFeedback }) => {

    return (
        <ul>
            {options.map(option => (
                <li key={option}>
                    <button type="button" name={option} onClick={handleFeedback}>{option}</button>
                </li>
            ))}
        </ul>
    );
}

FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleFeedback: PropTypes.func.isRequired,
}

