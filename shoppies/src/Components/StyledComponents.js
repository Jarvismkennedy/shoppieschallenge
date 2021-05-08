import styled from 'styled-components'

export const StyledNav = styled.nav`
display:flex;
align-items: center;
padding: .5rem 1rem;
flex-flow: row nowrap;
justify-content: flex-start;
text-align:center;
background-color:${props => props.theme.secondaryColor};
`;
export const StyledLogo = styled.span`
display: inline-block;
padding-top: .3125rem;
padding-bottom: .3125rem;
margin-right: 1rem;
font-size: 1.25rem;
line-height: inherit;
`;
const button = ({className, disabled, name, onClick, value}) => {
    return <button type = 'button' name = {name} className = {className} disabled = {disabled} onClick = {onClick}> {value} </button>
}
export const Button = styled(button)`
outline:none;
cursor:${props => props.disabled ? 'auto':'pointer'};
border:1px solid ${props => props.theme.toggleBorder};
text-align: center;
text-decoration: none;
display: inline-block;
padding:1%;
border-radius: 6px;
background-color:${props => props.theme.body};
color: ${props => props.theme.text};
width:fit-content;
:hover{
    background-color:${props => props.theme.text};
    color:${props => props.theme.body};
}
:disabled{
    background-color:${props => props.theme.text};
    color:${props => props.theme.body};
}
`;
const Searchbar = ({className, updateSearch}) => {
    return <input className = {className} id = 'searchValue' type = 'text' placeholder = 'Search...' onKeyUp = {updateSearch}/>      
    }
export const StyledSearchbar = styled(Searchbar)`
      border-radius: 6px;
      display: table-cell;
      outline:none;
      width: 30%;
      height: auto;
      padding-top: 0;
      padding-bottom: 0;
      font-size: inherit;
      font-family:inherit;
      color: inherit;
      border:none;
      box-shadow: none;
      background-color:${props => props.theme.body};
      ::placeholder, 
      ::-webkit-input-placeholder {
        color: ${props => props.theme.text};
        opacity:50%;
      }
      :-ms-input-placeholder {
        color: ${props => props.theme.text};
        opacity:50%;
    `;
export const Row = styled.div`
display:flex;
padding:1%;
padding-bottom:0;
justify-content:flex-start;
`;
export const Col = styled.div`
flex:50%;
width:auto;
background-color:${props => props.theme.secondaryColor};
margin:1%;
padding:1%;
margin-top:0%;
border-radius:15px;
display:flex;
flex-direction:column;
justify-content:flex-start;
text-align:center;
`;
export const BigCol = styled(Col)`
height: ${props => props.left? '70vh':'fit-content'};

margin-bottom:0;
overflow:hidder;
overflow-y:scroll;

:-ms-overflow-style: none;  /* Internet Explorer 10+ */
:scrollbar-width: none;  /* Firefox */

::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
`;
export const StyledBanner = styled.div`
visibility:${props => props.show? 'visible':'hidden'};
padding:20px;
background-color: ${props => props.theme.ternaryColor};
color: ${props => props.theme.text};
text-align:center;
font-size:1.5rem;
`;
export const ModalContainer = styled.div`
display:${props => props.show ? 'block':'none'};
position:fixed;
z-index:1;
left:0;
top:0;
width:100%;
height:100%;
overflow:auto;
background-color: rbg(0,0,0);
background-color:rgba(0,0,0,0.4);
`;
export const ModalContent = styled.div`
background-color:${props => props.theme.ternaryColor};
color:${props => props.theme.text};
margin:auto;
margin-top:2%;
border:1px;
border-radius:6px;
width:50%;
text-align:center;
width:fit-content;
`;
export const CloseButton = styled.span`
float:right;
font-size: 28px;
font-weight:bold;

:hover,
:focus{
    color:${props => props.theme.secondaryColor};
    cursor:pointer;
}
`;
export const Toggle = styled.button`
margin-right:2%;
margin-top:1%;
margin-bottom:1%;
float:right;
background: ${props => props.theme.gradient};
border-radius:20px;
cursor:pointer;
display:flex;
border:1px solid ${props => props.theme.toggleBorder};
font-size: .5rem;
justify-content:space-between;
align-items:center;
overflow:hidden;
padding: .5rem;
position: relative;
width: 8rem;
height: 4rem;
`;
export const Clear = styled.a`
color:${props => props.theme.text};
text-decoration:none;
margin-left:2%;
`;