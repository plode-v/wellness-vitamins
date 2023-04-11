import React from 'react'
import styled from 'styled-components'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    & {
        width: 50px;
        height: 50px;
        background-color: #fff7f7;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props=> props.direction === "left" && "10px"};
        right: ${props=> props.direction === "right" && "10px"};
        margin: auto;
        opacity: .5;
        transition: 100ms;
    }
    &:hover {
        opacity: 1;
        transition: 100ms;
    }
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 70%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    padding-right: 100px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 1.5;
`
const Button = styled.button`
    & {    
        padding: 10px;
        font-size: 16px;
        background-color: transparent;
        border: solid 1px;
        cursor: pointer;
        transition: 100ms;
    }

    &:hover {
        transform: scale(1.2);
        transition: 100ms;
    }
`



const OldSlider = () => {
  return (
    <Container>
        <Arrow direction="left" onClick={handleClick("left")}>
            <ArrowBackIosNewRoundedIcon />
        </Arrow>
        <Wrapper>
            <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src='https://carefoodsupplements.com/wp-content/uploads/2021/11/eng_pm_Liver-Pro-60-caps-3594_1-1.png' />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>PRE WORKOUT FOR EVERYONE DON'T WAIT BUY NOW AND TAKE CARE OF YOURSELF.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="f5faf4">
                <ImgContainer>
                    <Image src='https://carefoodsupplements.com/wp-content/uploads/2021/11/eng_pm_Liver-Pro-60-caps-3594_1-1.png' />
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALE</Title>
                    <Desc>PRE WORKOUT FOR EVERYONE DON'T WAIT BUY NOW AND TAKE CARE OF YOURSELF.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="f4fafd">
                <ImgContainer>
                    <Image src='https://carefoodsupplements.com/wp-content/uploads/2021/11/eng_pm_Liver-Pro-60-caps-3594_1-1.png' />
                </ImgContainer>
                <InfoContainer>
                    <Title>NEW ARRIVAL SALE</Title>
                    <Desc>PRE WORKOUT FOR EVERYONE DON'T WAIT BUY NOW AND TAKE CARE OF YOURSELF.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowForwardIosRoundedIcon />
        </Arrow>
    </Container>
  )
}

export default OldSlider;