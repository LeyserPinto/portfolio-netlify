import styled from "styled-components";


export const View=styled.div`

display:grid;
grid-template-columns:30% 70%;
grid-template-rows:100%;

& > .left-section{
    background-color:#FFF;
    color:#0a1424;
    padding:20px;
    overflow:hidden;
    & .data{
        font-weight:600;
        font-size:1.2em;
        margin:0;
    }
    & .location{
        font-size:.8em;
        margin:0;
    }
}

& > .right-section{
    overflow:hidden;
    padding:10px;
    & > h4{
        font-size:1.2em;
        margin:0;
        color:#FFD600;
    }
    & > h6{
        font-size:1em;
        margin:0;
        color:#ffffff;
    }
    & > p{
        font-size:.8em;
        line-height:1.5em;
        margin:0;
        color:#ffffff;
    }
}

@media screen and (max-width:720px){
    grid-template-columns:100%;
grid-template-rows:40% 60%;
}
`
