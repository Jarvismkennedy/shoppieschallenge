import React from 'react';
import Banner from './Banner';
import {Col,Row, Button, StyledSearchbar} from './StyledComponents';
import styled from 'styled-components';


const HiddenSearch = styled(StyledSearchbar)`
visibility:hidden;
`;

export default function NominationList(props){
    return (
    <div>
        <HiddenSearch/>
        <h2>Nomination List</h2>
        <ul className = 'movieList'> 
            {Object.keys(props.nominatedMovies).length > 0 ? Object.keys(props.nominatedMovies).map((id) => {
            return( 
            <li key = {id}>
                <Row>
                <Col>
                <label for = {props.nominatedMovies[id]}>{props.nominatedMovies[id]}</label>
                </Col>
                <Col>
                <Button name = {props.nominatedMovies[id]} type = 'button' disabled = {props.showThankYou} variant = 'outline-secondary' onClick = {() => props.handleRemove(id)} value = {'Remove'}/>
                </Col>
                </Row>
            </li>
            )}):undefined}
        </ul>
        {props.bannerMessage? <h5>{props.bannerMessage}</h5>: <h5 style = {{visibility:'hidden'}}>hidden text</h5>} 
    </div>)
}