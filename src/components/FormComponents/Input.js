import styled from "styled-components";

const Input = styled.input`

    width: 90%;
    height: 58px;
    margin-bottom: 13px;
    padding: 15px;

    border-radius: 5px;
    font-size: 20px;
    
    ::placeholder{

        color: #000000;
        font-size: 20px;
        font-weight: 400;

    }

    :disabled {
        opacity: 0.7;
        background-color: #fff;
    }

`

export default Input;