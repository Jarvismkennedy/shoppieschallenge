import React, {useState} from 'react';
import {ModalContainer, ModalContent, CloseButton} from './StyledComponents';


export default function Modal(props){
    
    return (
        <ModalContainer show = {props.show} onClick  = {() => props.setShow(false)}>
            <ModalContent onClick = {(e) => {e.preventDefault(); e.stopPropagation();}}>
                <CloseButton onClick = {()=> props.setShow(false)}>&times;</CloseButton>
                <div style = {{padding:'20px'}}><p>{props.message}</p></div>
            </ModalContent>
        </ModalContainer>
    );
}