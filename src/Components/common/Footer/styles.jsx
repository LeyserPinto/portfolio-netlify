import styled from "styled-components";


export const FooView=styled.footer`

width:80%;
height:20vh;
max-width:1330px;
margin:0 auto;
display:flex;
justify-content:space-between;
place-items:center;
overflow:hidden;
& .page-info{
    text-transform:uppercase;
    display:flex;
    align-items:center;
    .number{
        font-size:3em;
        font-weight:bold;
        letter-spacing:5px;
    }
    .nome{
        font-size:1.35em;
        font-weight:600;
    }
}


//Media Querys

@media screen and (max-width:720px){
    flex-direction:column;
}
`