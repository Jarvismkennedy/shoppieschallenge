import React from 'react'
import {StyledSearchbar} from './StyledComponents'


export default function SearchBar(props){
  
    return (
       <StyledSearchbar updateSearch = {props.updateSearch}/>
    )
}