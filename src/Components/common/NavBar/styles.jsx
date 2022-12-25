
import styled from "styled-components";


export const View=styled.div`
width:100%;
height:60px;
display:grid;
grid-template-columns:60% 40%;
grid-template-rows:100%;
place-items:center;

//Left Side
& > .header-l-side{
    a{

    color: #fff;
    text-decoration:none;
    
    font-size:calc(.8rem + 1vw);
    transition: all ease-in-out .5s;
    & span{
        font-size:1.3em;
        font-weight:600;
    }

    &:hover{
        color:#FFD600;
    }
    }
}

//Right Side
& .header-r-side{

    //Text set Width    
    font-size:calc(.4rem + 1vw);    
    font-family: 'Fira Code', monospace;
    //unorder List
    ul{        
    display:flex;
    justify-content:space-between;
    list-style:none;

    //Li
    li{
        margin-right:15px;
        transition:transform ease-in-out .2s;
        //Link
        a{
        text-decoration:none;            
        color:#FFF;
        
        transition:color ease-in-out .2s;
            &::before{
                content:"";
                position:absolute;
                top:50%;
                left:50%;
                transform:translateX(-50%);
                width:5ch;
                height:2px;
                opacity:0;
                background-color:#FFD600;
            }
            &:hover{
                transform:scale(1.2);
            }
            &:hover::before{
                opacity:1;
                animation: Hover-Line-Expand 0.7s forwards;
            }
            @keyframes Hover-Line-Expand {
                
                0%{
                    top:50%;
                    
                }
                50%{
                    top:100%;
                    width:5ch;
                    height:2px;
                }
                100%{
                    top:100%;
                    width:10ch;
                    
                    height:4px;
                }
                
            }
        }
    }
    }
    & .fBars{
            display:none;
    }

    & li:hover,li:active{              
        transform:scale(1.15);
        & a{
         
            color:#6AF79A;
        }  
    }

    @media screen and (max-width: 720px){
        & .no-menu{
            display:none;
        }
        & .fBars{
            display:block;
            font-size:calc(1.5em + 1em);
        }
    }
}

@media screen and (max-width:380px) {

    //Left Side
    & > .header-l-side{
    font-size:calc(.5rem + 1vw);
    & span{
        font-size:1.3em;
        font-weight:600;
    }
}
}
`

export const MobileNav = styled.div`
width:100%;
height:100vh;
z-index:10;
background-color:#FFF;
position: absolute;
color:#0D1B2F;
top:-150%;
left:0%;
transition:all ease-in-out .5s;

& .topSection{
    height:50px;
    display:flex;
    justify-content:end;
    place-items:center;

    &:first-child{
        font-size:1.5em;
        font-weight:800;
        margin-right:20px;
    }
}

& > .centerSection{
    & > ul{        
    display:flex;
    flex-direction:column;
    place-items:center;
    list-style:none;
    padding:0;

    //Li
    li{
        margin-bottom:20px;
        transition:transform ease-in-out .2s;
        //Link
        a{
        text-decoration:none;            
        color:#0D1B2F;
        
        transition:color ease-in-out .2s;
        }
    }
    }
}
`