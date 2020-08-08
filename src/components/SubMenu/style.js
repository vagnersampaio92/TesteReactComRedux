import styled from 'styled-components'


export const Container = styled.div`
width: 100%;
height:100;
/* display:flex; */
`;

export const Pai = styled.div`

:nth-last-child(n){
    margin-left:15px
}
/* display:flex; */

`;
export const Name = styled.div`
display: flex;
align-items: left;
justify-content:center;
font-family:Roboto;
`;
export const Align = styled.div`
display: flex;
:hover {
  background-color: #e3e5e8;
}
cursor: pointer;
`;
export const Extra = styled.div`
padding-right:20px;
margin-left:20px;
display: flex;
align-items: left;
justify-content:center;
font-family:Roboto;
`;