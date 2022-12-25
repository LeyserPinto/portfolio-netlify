import styled from "styled-components";

export const MainView=styled.div`
//Alingment
margin:0 auto;
//Size
width:90%;
max-width:1330px;
height:70vh;
overflow-y:auto;
overflow-x:hidden;

& .firstRow{
    //display

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
& .firstRow img{
    width:250px;
}
& .firstRow p{
    text-align:center;
}


//Display
& .secondRow{
& > .content{
    width:100%;
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(60%,1fr));
    grid-auto-rows:auto;
    row-gap:20px;
    border-radius:10px;
}
}


`


