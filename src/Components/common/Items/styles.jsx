import styled from "styled-components";

export const ItemView = styled.div`

border-radius:5px;
box-shadow:  0px 5px 15px 5px rgba(0, 0, 0, 0.5),  0px 20px 20px 5px rgba(0, 0, 0, 0.36);
padding:20px;
display:flex;
align-items:center;
overflow:hidden;

//Positions
position:relative;


//pointer
cursor:pointer;


//Childrens
& :first-child{
    font-size:3.5em;
}

& .ltxt{
    margin-left:20px;
    font-size:1.5em;
}


//before effects
& > ::after{
    content:"";
    position:absolute;
    top:-10%;
    left:-150%;
    width:120%;
    height:150%;
    z-index:-1;
    background-color:#FFD600;
    transform:rotate(15deg);

    transition: all ease-in-out .5s;
}

//Hover

&:hover > ::after{
left:0%;
}
`