import styled from "styled-components";

export const NavbarSty = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 98%;
    height: 100px;
    background-color: black;
    z-index: 9999999;
    position: absolute;
    top: 1%;
    left: 1%;
    bottom: 0;
    right: 1%;
    border-radius: 50px;
    transition: all .5s ease-out;


    &:hover{
        transform: scale(1.01);
        box-shadow: 0 0 10px blue;
    }
    &:active{
        box-shadow: 0 0 10px red;
        transition: all .0s ease-out;
    }

`