import { theme } from 'components/Layout';
import PropTypes from 'prop-types';
import { Title, Block } from './Section.styled';
import { ThemeProvider } from 'styled-components';
export const Section = ({title='', children}) => {
    return (
        <ThemeProvider theme={theme}>
        <Block>
            {title && <Title>{title}</Title>}
            {children}
        </Block>  
        </ThemeProvider>    
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired,
}