import styled from "styled-components";

const Container = styled.div`
    
    display: flex;   
    flex-direction: column;
    padding-left: 25px;
    padding-right: 25px;

`

const Content = styled.div`

    width: 100%;
    height: 446px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    background-color: #fff;

    p {
        width: 200px;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: center;

        color: #868686;
    }

`

export {
    Content,
    Container
}