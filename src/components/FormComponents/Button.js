import styled from "styled-components";

const Button = styled.button`

    width: 90%;
    height: 58px;
    margin-bottom: 11px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #A328D6;

    border-radius: 5px;

    font-size: 20px;
    font-weight: 700;
    line-height: 23px;

    color: #fff;

    :disabled{
        opacity: 0.9;
        background-color: #fff;
    }

`

export default Button;