import styled from "styled-components";

const Container = styled.div`

    display: flex;
    flex-direction: column;

`

const Header = styled.p`

    margin: 25px;

    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;

    color: #fff;
`

const Content = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    

`

export {
    Container,
    Header,
    Content
}