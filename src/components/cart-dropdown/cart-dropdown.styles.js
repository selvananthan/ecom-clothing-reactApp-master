import styled from "styled-components";

import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInButton},
    ${InvertedButton} {
        margin-top: auto;
    }
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    scrollbar-width: auto;
    scrollbar-color: #545454 #ffffff;

    &::-webkit-scrollbar {
        width: 16px;
    }
    &::-webkit-scrollbar-track {
        background: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #545454;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;
