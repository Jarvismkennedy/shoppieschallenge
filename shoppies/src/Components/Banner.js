import React from 'react';
import {StyledBanner} from './StyledComponents';
export default function Banner(props){

    return <StyledBanner show = {props.show}> <strong>{props.message}</strong></StyledBanner>
}