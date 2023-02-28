import PropTypes from 'prop-types';
import { Note } from './Notification.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Layout';

export const Notification = ({ message }) => {
    return (
        <ThemeProvider theme={theme}>
            <Note>{message}</Note>
        </ThemeProvider>)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}