import React from 'react';
import {StyledNav, StyledLogo} from './StyledComponents'

import styled from 'styled-components';
const PageTitle = styled.div`
width:100%;
text-align:center;
`;
const StyledLogoHidden = styled(StyledLogo)`
visibility:hidden`;

export default function Navbar(props) {
    let message = props.showThankYou ? 'Thank You For Participating In The Shoppies': 'The Shoppies Nominations';
    return(
        <StyledNav>
            <StyledLogo>Shoppies</StyledLogo>
            <PageTitle><h1>{message}</h1></PageTitle>
            <StyledLogoHidden>Shoppies</StyledLogoHidden>
        </StyledNav>
    )
}