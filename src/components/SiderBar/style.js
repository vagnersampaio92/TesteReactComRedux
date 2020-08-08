import styled from 'styled-components'
import Collapse from "@material-ui/core/Collapse";

export const Container= styled.div`
width: auto;
min-width:100px;
height:100%;
padding-left:20px;
padding-top:20px;
position: fixed;
box-shadow: 4px 1px 5px #aaaaaa;
background:#e9ebee;
/* display:flex; */
/* background: blue; */
`;
export const Name= styled.div`
display: flex;
align-items: left;
justify-content:center;
font-family:Roboto;
`;
export const Align= styled.div`
display: flex;
:hover {
  background-color: #e3e5e8;
}
cursor: pointer;
`;
export const Pai = styled.div`

:nth-last-child(n){
    margin-left:15px
}
/* display:flex; */

`;

