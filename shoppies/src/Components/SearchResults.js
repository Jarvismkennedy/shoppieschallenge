import React from 'react';
import {Row, Col, Button} from './StyledComponents';


export default function SearchResults(props){
    return(
        <div>
            <h3>
                {props.userSearchRequest ? 'Search results for "' + props.userSearchRequest + '"': 'Search for a movie to nominate.'}
            </h3>
            <ul className = 'movieList'>
            {props.searchResults  ? props.searchResults.map((result) => {
              return( <li className = 'displayList' key = {result.imdbID}>
                <Row >
                  <Col>
                    <label for = {result.Title}>{result.Title} ({result.Year}) </label>
                  </Col>
                  <Col>
                    <Button name = {result.Title} disabled = {props.nominatedMovies.hasOwnProperty(result.imdbID)} onClick = {() => props.handleNominate(result)} value = {'Nominate'}/>
                  </Col>
                </Row>
              </li>) })
              : props.errorMessage} 
          </ul>
        </div>
    )
}