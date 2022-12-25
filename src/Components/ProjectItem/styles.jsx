import styled from "styled-components";

export const Item=styled.div`

//Shadows and border
border-radius:5px;
box-shadow:  0px 5px 15px 5px rgba(0, 0, 0, 0.5),  0px 20px 20px 5px rgba(0, 0, 0, 0.36);
padding:20px;


//Overflowing
overflow:hidden;

//Display
display:flex;
flex-direction:column;
justify-content:start;
align-items:center;
flex-wrap:nowrap;


& a{
    color:#FFF;
    margin-top:1.5em;
    text-transform:uppercase;
}
& p{
    color:#FFD600;
}
`