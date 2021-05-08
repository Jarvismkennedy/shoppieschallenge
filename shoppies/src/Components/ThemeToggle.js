import React from 'react';
import styled from 'styled-components';
import {BsMoon, BsSun} from 'react-icons/bs'
import {Toggle} from './StyledComponents'
const Sun = styled(BsSun)`
height: auto;
width: 1.75rem;
color: yellow;
transition: all 0.3s linear;
transform: ${props => props.isLightTheme? 'translateY(0)' : 'translateY(100px)'};
`;

const Moon = styled(BsMoon)`
height: auto;
width: 2rem;
color: whitesmoke;
transition: all 0.3s linear;
transform: ${props => props.isLightTheme? 'translateY(-100px)':'translateY(0)'}
`
export default function ThemeToggle(props){

    const isLightTheme = props.theme === "light";
    
    return(
        <Toggle onClick = {props.toggleTheme}>
            <Sun isLightTheme={isLightTheme}/>
            <Moon isLightTheme = {isLightTheme}/>
        </Toggle>
    )
}