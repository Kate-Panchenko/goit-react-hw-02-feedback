import styled from "styled-components";

export const Options = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 86px;
    color: ${props => props.theme.black};
`
export const Button = styled.button`
    background-color: ${props => props.theme.accent};
    padding: 14px 46px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.21;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        background-color: ${props => props.theme.hover};
    }
`