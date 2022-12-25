import styled from "styled-components";

export const MainView = styled.main`
//Alingment
margin:0 auto;
//Size
width:90%;
max-width:1330px;
height:70vh;
//Features
overflow:hidden;
//Display
display:grid;
grid-template-columns:25% 75%;



//Childrens
& >.MainContent{
    overflow-y:auto;
    //Title
    & > .content-subtitle {
        font-size:1.2em;
        font-weight:600;
        letter-spacing:.15em;
        text-transform:uppercase;
    }

    //Container
    & > .content-container-layout{
    width:100%;
    height:auto;

    & > .content{
        padding:10px;
        display:grid;
        grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
        grid-auto-rows:100px;
        gap:40px 20px;
        
    }
}
}

@media screen and (max-width:720px) {
    
    grid-template-columns:1fr;
    grid-template-rows:1fr;
}

`


// box-shadow:  11px 11px 22px #333333,
//              -11px -11px 22px #757575;