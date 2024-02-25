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



       
        <Wrapper>
          <Container>
              
              <Container_Left_h1>
            <Heading>
                System Architecture
            </Heading>
            <Description>
                After passing a test, we’ll award you with an online certificate. You can also submit projects as a result of taking our courses.
            </Description>
        </Container_Left_h1>
          </Container>
        </Wrapper>
        

    </Wrapper>
  )
}


const Container=styled.div`
width: 76rem;
height: auto;
flex-shrink: 0;
margin: 0 0 10% 13%;


border-radius: 2.05656rem;
border: 0.548px solid rgba(255, 255, 255, 0.30);
background: radial-gradient(158.47% 130% at 100% 100%, rgba(229, 9, 20, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%);
box-shadow: 0px 32.90461px 65.80921px 0px rgba(39, 77, 153, 0.20);
backdrop-filter: blur(21.936403274536133px);


text-align: center;
  max-width: 1234px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;

`




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

const splineContainer=styled.div`
width: 10rem;
height: auto;
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
  text-align: left;
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
margin: 0 0 12rem 12rem;
text-align: left;
color: rgba(255, 255, 255, 0.7);

`
