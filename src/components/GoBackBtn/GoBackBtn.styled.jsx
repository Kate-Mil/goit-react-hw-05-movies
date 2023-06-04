import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
   min-width: 100px;
   text-align: center;
    background-color: rgba(128, 128, 128, 0.5);
    letter-spacing: 0.06em;
    font-family: inherit;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: calc(30/16);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    margin-left: 15px;
    margin-bottom:20px;
    display: inline-block;
      
    transition: background-color, cubic-bezier(0.4, 0, 0.2, 1);
   
    &:focus,
    &:hover,
    &:active {   
        background-color: rgba(64, 64, 64, 0.5);

    }     
}`;
