import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    
}
`
export const Menu = styled.menu`
    display: flex;
    justify-content: space-evenly;
    font-size: large;
    font-weight: bolder;
    color: white;
    margin-bottom: 1rem;
    .li{
        color: white;
    }
    .li:hover{
        transition: all .7s;
        transform : scale(1.3);
        color: purple;
    }

`
export const Section = styled.section`
  background-color:rgb(200, 100, 50); 
	border: 3px outset rgb(200, 100, 50);
	border-radius: 10px;
	padding: 5px;
  width: 22em;
  height: 32em;
  margin: 2rem auto;
  position: relative;
  h2{
    margin-top: 0;
    padding-top: 1rem;
    text-align: center;
    color: white;
    }

    h2 {
    width: 192px;
    position: relative;
    left: 0%;
    animation: h2 5s linear infinite;
}
    @keyframes h2 {

    50% {
        left: 45%;
    }

}  
`
export const Li = styled.li`
    list-style: none;
    color: white;
    margin-left: 5%;
`