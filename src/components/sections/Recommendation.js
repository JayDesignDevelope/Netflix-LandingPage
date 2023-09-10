import React from 'react'
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles"

export default function Recommendation() {
  return (
    <Wrapper>
        <Wavefirst src="/images/waves/wave12.svg" style={{top:"100px"}}/>
        <Wave src="/images/waves/bottommostcurve.svg" style={{top:"516px"}}/>
        <Container_Left_h1>
            <Heading>
                Recommendation System
            </Heading>
        </Container_Left_h1>
    </Wrapper>
  )
}



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




const Heading=styled(H1)`
  color: #C80006;
  font-family: SF Pro Display;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  margin: 12rem;
  line-height: normal;
`

const Container_Left_h1=styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.9375rem;
  width: 28.21981rem;
`