import React from "react";
import styled from 'styled-components';


const Button = styled.button`
    width:200px;
    height:40px;
    background-color:white;
    margin : 10px;
    padding:10px;

    &:hover{
        background-color : rgb(30, 144, 255);
        color:white;
        border : none;
    }

`


// const Button = ({children}) => {
//     return (
//         <button>{children}</button>
//     )
// }

export { Button }