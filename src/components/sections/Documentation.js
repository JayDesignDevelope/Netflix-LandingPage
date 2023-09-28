import React from 'react'
import styled from "styled-components";
import { H1, MediumText } from "../styles/TextStyles"
export default function Documentation() {
  return (
    <Wrapper>
        <Wavefirst src="/images/waves/wavedocs.png" style={{top:"100px"}}/>
        <Container>
            <Heading>
                Documentation
            </Heading>
        </Container>
    </Wrapper>




    
  )
}



const Wrapper=styled.div`
position: relative;
align-items: center;


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


const Heading=styled(H1)`

color: #251616;
text-align: center;

/* Header H2 */
font-family: SF Pro Display;
font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top:2rem;
`

const Container=styled.div`
width: 76rem;
height: 28rem;
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




const Title=styled(H1)`
width: 7.6875rem;
color: #FFF;
font-family: SF Pro Display;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 2rem 0 18rem 6rem;
position: absolute;

`