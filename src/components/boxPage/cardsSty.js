import styled from "styled-components";

export const CardsWrap = styled.div`
     width: 100%;
     height: 100vh;
     background-color: #141e30;
`

export const Card3 = styled.div`
     cursor: pointer;
     margin: 20px auto;
     width: 23%;
     height: 50%;
     background-color: red;
     padding: 20px ;
     position: relative;
     border-radius: 10px;
     text-align: center;
     color: black;
     transition: all ease-in-out .5s ;


     &:hover{
          background-color: blueviolet;
          color: white;
          transform: scale(1.050);
     }

     &:active{
          transition: all .1s;
          background-color: black;
          color: white;
     }

     a{
          text-decoration: none;
          color: black;

          &:active{
               color: red;
          }
     }

     @media(max-width: 480px){
          width: 70%;
     }

     @media(min-width: 769px){
          width: 23%;
     }
`

export const AllCard = styled.div`
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin: 6% auto ;
     flex-wrap: wrap;
`

export const ImgCard = styled.div`
     width: 99%;
     height: 202.69px;
     background-color: none;   
     transition :  all ease-in-out .5s;
          &:hover{
               border-radius: 5px;
          }
     
     img{
          width: 100%;
          height: 100%;
          transition: all ease-in-out .5s;
          &:hover{
               border-radius: 5px;
          }

     }
`