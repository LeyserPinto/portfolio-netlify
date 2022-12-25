import styled from "styled-components";


//Left Side Child Styles
export const View=styled.div`
display:grid;
place-items:center;
//Unorder List Styles 
    //Display Flex
    ul{
        width:90%;
        height:90%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding:0%;
        gap: 1.2em 0em;
        text-align:center;
        //Links Items with animations
        &> li{                    
                    list-style:none;
                    
                    & a{
                        text-decoration:none;
                        color: #6AF79A;
                        font-size:2em;  
                        text-shadow: 0px 0px 5px #FFFFFF; 
                        position:relative; 
                        & > :nth-child(1),:nth-child(2),
                        :nth-child(3),:nth-child(4){
                            transition:all .5s ease-in-out;
                            
                        }
                        &::before{
                            content:"";
                            position:absolute;
                            top:100%;
                            left:50%;
                            transform:translate(-50%, -100%);
                            width:1ch;
                            height:2px;
                            background-color:#FFD600;
                            opacity:0;
                            transition:all .3s ease-in-out;
                        }

                        &:hover > :first-child{
                            color:#abfec7;
                            transform:scale(1.2);
                        }
                        &:hover::before{
                            width:2ch;
                            opacity:1;

                        }
                        
                    }
         }
    }

    //Media Query of Main

@media screen and (max-width:720px) {
        display:none;
}
`