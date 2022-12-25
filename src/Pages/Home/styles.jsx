import styled from "styled-components";


export const MainView=styled.main`
margin: 0 auto;
width:90%;
height:70vh;
max-width:1330px;
display:grid;
grid-template-columns:25% 75%;
grid-auto-rows:100%;
padding:0;
overflow:hidden;


//Right Side Child Styles
& .main-right-section{
    width:auto;
    height:100%;
    font-family: 'Fira Code', monospace;
    display:flex;
    justify-content:center;
    overflow:hidden;
    flex-direction:column;
    text-align:left;

    //Principal Section Paragraphs
    & p{
        line-height:1.8em;
        letter-spacing:.15em;
        font-size: calc(1em + 1vw);
        & span{
            font-weight:600;
            font-size:calc(1.5em + 1vw);                        
            letter-spacing:.25em;
            color:#FFD600;
        }
    }



    //Slider of Lang 
    & .lang-slider{
        width:20ch;
        height:2em;
        display:flex;
        justify-content:center;
        overflow:hidden;
        position:relative;
        top:0;
        left:0%;                
        color:#6AF79A;
        //Unorder List containt Name of Languajes
        & ul{
                        list-style:none;
                        font-size:1.5em;
                        padding:0;
                        margin:0;
                        position:relative;
                        & li{
                            position:relative;
                            top:0;
                            animation: slide 12s steps(4) infinite;

                            @keyframes slide {
                                100%{
                                    top:-5.3em;
                                }
                            }
                        }
                        & li::after{
                            content:"";
                            position:absolute;
                            top:0%;
                            left:0%;
                            width:18ch;
                            height:100%;
                            background-color:#112339;

                            animation: typing 3s steps(18) infinite;

                            @keyframes typing {
                                
                                40%,60%{
                                    left:calc(100% + 30px);
                                }
                            }
                        }
        }

        //After and Before of Div - Blink Effect

        &::before{
            content:"[";
            position:absolute;
            font-size:1.6em;
            top:50%;
            left:0%;
            transform:translateY(-50%);
            color:#6AF79A;
            
            animation: blink 1s steps(1) infinite;
        }
        &::after{
            content:"]";
            position:absolute;
            font-size:1.6em;
            top:50%;
            right:0%;
            transform:translateY(-50%);
            color:#6AF79A;
            animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
            40%,60%{
                top:calc(100% + 30px);
            }      
        
        }
    }
}

//Media Query of Main

@media screen and (max-width:720px) {
    
    grid-template-columns:1fr;
    grid-template-rows:1fr;
    
    & .main-right-section{
        text-align:center;
        & .lang-slider{
            left:50%;
            transform:translateX(-50%);
        }
    }
}
`