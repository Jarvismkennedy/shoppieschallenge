import React, {useState,useEffect} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './Components/Themes';
import {GlobalStyles} from './Components/GlobalStyles'
import SearchBar from './Components/SearchBar';
import NominationList from './Components/NominationList';
import SearchResults from './Components/SearchResults';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Modal from './Components/Modal';
import ThemeToggle from './Components/ThemeToggle';
import {Row,BigCol,Button,Clear} from './Components/StyledComponents';

function App() {

  const[theme, setTheme] = useState('light');
  const[userSearchRequest, setUserSearchRequest] = useState('');
  const[searchResults, setSearchResults] = useState([]);
  const[errorMessage, setErrorMessage] = useState('');
  const[nominatedMovies, setNominatedMovies] = useState({});
  const[showModal, setShowModal] = useState(false);
  const[showThankYou,setShowThankYou] = useState(false);
  const[modalMessage,setModalMessage] = useState('');
  const[bannerMessage, setBannerMessage] = useState('Search for movies to nominate');
  


  useEffect(() => {
    let moviesLeftToNominate = 5 - Object.keys(nominatedMovies).length;
    let continueNominating = moviesLeftToNominate === 1 ? 'Nominate 1 more movie!' : 'Nominate ' + (moviesLeftToNominate.toString()) + ' more movies!'
    let message = moviesLeftToNominate > 0 ? continueNominating: undefined;
    setBannerMessage(message)
    
  },[nominatedMovies])
  useEffect(() => {
    let API = 'http://www.omdbapi.com/?apikey=66521911&type=movie&s='+userSearchRequest;
    fetch(API)
    .then((response) => response.json())
    .then((result) => 
    {
      setSearchResults(result.Search);
      let error = userSearchRequest === '' ? undefined : result.Error;
      setErrorMessage(error);
    })
  },[userSearchRequest])

  useEffect(() => {
    setModalMessage('You have already submitted your nominations')
  },[showThankYou])

  useEffect(()=> {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);

    const nominations = window.localStorage.getItem('nominations');
    nominations && setNominatedMovies(JSON.parse(nominations));

    const completed = window.localStorage.getItem('completed');
    completed && setShowThankYou(completed)

    const searchRequest = window.localStorage.getItem('search');
    searchRequest && setUserSearchRequest(searchRequest);
  },[])

  const updateSearch = () => {
    let searchValue = document.getElementById('searchValue').value;
    setUserSearchRequest(searchValue);
    window.localStorage.setItem('search',searchValue);
  }
  const toggleTheme = () => {
    if (theme === 'light'){window.localStorage.setItem('theme','dark');setTheme('dark'); return}
    window.localStorage.setItem('theme','light');
    setTheme('light');
  }
  const handleNominate = (result) => {
    let nominated = {...nominatedMovies};
    if (Object.keys(nominated).length === 5){if (!showThankYou){setModalMessage('You can only nominate 5 movies')} setShowModal(true); return}
    nominated[result.imdbID] = result.Title + ' ('+result.Year+')';
    window.localStorage.setItem('nominations', JSON.stringify(nominated));
    setNominatedMovies(nominated);
  }
  const handleRemove = (id) => {
    let nominated = {...nominatedMovies};
    delete nominated[id];
    setNominatedMovies(nominated);
  }
  const handleSubmit = () => {
      if (Object.keys(nominatedMovies).length < 5 || showThankYou){if (!showThankYou){setModalMessage('You must nominate 5 movies.')}; setShowModal(true); return}
      setShowThankYou(true);
      window.localStorage.setItem('completed',true);
  }
  const clear = () => {
    window.localStorage.removeItem('nominations'); 
    window.localStorage.removeItem('completed'); 
    window.localStorage.removeItem('search'); 
    window.location.reload(); 
    return false
  }
    
  return (
   
    <ThemeProvider theme = {theme==='light'? lightTheme:darkTheme}>
    <>
      <GlobalStyles/>
      <Navbar showThankYou = {showThankYou} key = {showThankYou} clear = {clear}/>
      <Clear href='#' onClick = {clear}>clear local storage</Clear>
      <Modal show = {showModal} setShow = {setShowModal} message = {modalMessage}/>
      <Row>
          <BigCol left = {true}>
            <SearchBar updateSearch = {updateSearch}/>
            <SearchResults searchResults = {searchResults} handleNominate = {handleNominate} errorMessage = {errorMessage} nominatedMovies = {nominatedMovies} userSearchRequest = {userSearchRequest}/>
          </BigCol>
          <BigCol>
            <NominationList nominatedMovies = {nominatedMovies} handleRemove = {handleRemove} bannerMessage = {bannerMessage} showThankYou = {showThankYou}/>
            <Button type = 'button' variant = 'outline-secondary' onClick = {handleSubmit} value = 'Submit Nominations'/>
          </BigCol>
      </Row>
      <ThemeToggle toggleTheme ={toggleTheme} theme = {theme} />
      
    </>
    </ThemeProvider>
  );
}

export default App;