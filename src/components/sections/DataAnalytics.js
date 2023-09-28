import React from 'react'
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles"

export default function DataAnalytics() {
  return (
    <Container>
      <Container_Left_h1>
          <Heading>
              Meeting Global Dataset of Netflix 
              <br></br>and Data Analysis    
          </Heading>
          <Description>
              After passing a test, we’ll award you with an online certificate. You can also submit projects as a result of taking our courses.
          </Description>
      </Container_Left_h1>

      <Wrapper>
          <Wavefirst src="/images/waves/linewaves.svg" style={{top:"10px"}}/>
      </Wrapper>

      <WrapperBox >
              
          <Box1 src="/images/cards/dashboardcard.svg"/>                
                
      </WrapperBox>
      <Box8 src="/images/cards/explorebtn.png"/>
      <Wrapper>
          <Wavefirst src="/images/waves/wavea1.svg" style={{top:"200px"}}/>
          <Wavefirst src="/images/waves/wave12.svg" style={{top:"400px"}}/>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
     justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */

`

const Box8=styled.img`
width: auto;
margin-left: 36rem;

height: auto;
position: absolute;
cursor: pointer;
`

const WrapperBox = styled.div`
    width:auto;
    height:auto;
    display: inline-flex;

    margin-left: 1%;
    padding: 1.25rem;
`

const ContentWrapper = styled.div`

display: flex;


width: 74rem;
height: 41.4375rem;
border-radius: 0.625rem;
background: rgba(0, 0, 0, 0.20);


flex-direction: row;
justify-content: flex-start;
`



const Box1=styled.img`

width: auto;
height: auto;

`








const Heading=styled(H1)`
  color: black;
  font-family: SF Pro Display;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  margin: 12rem 0 2rem 12rem  ;
  line-height: normal;
  text-align: center;
`

const Container_Left_h1=styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12rem;
`

const Description = styled(MediumText)`
/* Body Main */

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 140%;
margin-left: 1rem;
text-align: center;
color: black;

`


const Wrapper=styled.div`
position: relative;


`
const Wave=styled.img`
position: absolute;
z-index: -1;

  @media (min-width: 1440px) {
    width: 100%;
  }
`

const Wavefirst=styled.img`
position: absolute;
width: 100%;
z-index: -1;
`
const WavefirstTop=styled.img`
width: 100%;
position: absolute;
mix-blend-mode: overlay;
z-index: -1;
`