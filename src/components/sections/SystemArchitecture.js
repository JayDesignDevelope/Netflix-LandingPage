import React from 'react'
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles"
import Spline from '@splinetool/react-spline';

export default function SystemArchitecture() {
  return (
    <Wrapper>
        <Wavefirst src="/images/waves/wavea2.svg" style={{top:"200px"}}/>
        <Wavefirst src="/images/waves/wavea1.svg" style={{top:"100px"}}/>
        <Wavefirst src="/images/waves/wavea3.svg" style={{top:"300px"}}/>
        <Wavefirst src="/images/waves/wavea4.svg" style={{top:"400px"}}/>


        <Wave src="/images/waves/bottommostcurve.svg" style={{top:"616px"}}/>
        <Container_Left_h1>
            <Heading>
                System Architecture
            </Heading>
            <Description>
                After passing a test, we’ll award you with an online certificate. You can also submit projects as a result of taking our courses.
            </Description>
        </Container_Left_h1>
            <Spline scene="https://prod.spline.design/FKx-G7FfNifXgwuZ/scene.splinecode" />

    </Wrapper>
  )
}



const Wrapper=styled.div`
margin-top: 49rem;
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




const Heading=styled(H1)`
  color: white;
  font-family: SF Pro Display;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  margin: 12rem 0 0 12rem  ;
  line-height: normal;
`

const Container_Left_h1=styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.9375rem;
  width: 28.21981rem;
`

const Description = styled(MediumText)`
/* Body Main */

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 140%;
margin-left: 12rem;
text-align: left;
color: rgba(255, 255, 255, 0.7);

`
