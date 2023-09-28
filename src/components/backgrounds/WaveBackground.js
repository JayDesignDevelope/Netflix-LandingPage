import React from "react";
import styled from "styled-components";

export default function WaveBackground(){
    return <Wrapper>
        <Background/>
        <Wavefirst src="/images/waves/wave1upper.svg" style={{top:"304px"}}/>
        <Wavefirst src="/images/waves/middlecurve.svg" style={{top:"430px"}}/>
        <Wave src="/images/waves/bottommostcurve.svg" style={{top:"576px"}}/>
    </Wrapper>
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
mix-blend-mode: overlay;
z-index: -1;
`
const WavefirstTop=styled.img`
width: 100%;
position: absolute;
mix-blend-mode: overlay;
z-index: -1;
`



const Background=styled.div`
background: linear-gradient(180deg, #000 0.65%, #E50914 77.68%);position: absolute;
width:100%;
height: 800px;
z-index: -1;
`




