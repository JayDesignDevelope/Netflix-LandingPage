import React from 'react'
import styled,{ createGlobalStyle }  from "styled-components";
import { H1, MediumText } from "../styles/TextStyles"
export default function DesignSyste() {
  return (
    <WrapperOut>
        <Wavefirst src="/images/waves/wavedocs.png" style={{top:"100px"}}/>
        <Container>
            <Heading>
                Design System
            </Heading>
            <CenteredWrapper>
            <Wrapper>
              <InnerDiv className="item1"><Box1 src="/images/cards/svgs/a.svg"/></InnerDiv>
              <InnerDiv className="item2"><Box2 src="/images/cards/svgs/b.svg"/></InnerDiv>
              <InnerDiv className="item3"><Box3 src="/images/cards/svgs/f.svg"/></InnerDiv>
              <InnerDiv className="item4"><Box4 src="/images/cards/svgs/g.svg"/></InnerDiv>
              <InnerDiv className="item5"><Box5 src="/images/cards/svgs/e.svg"/></InnerDiv>
              <InnerDiv className="item6"><Box6 src="/images/cards/svgs/c.svg"/></InnerDiv>
              <InnerDiv className="item7"><Box7 src="/images/cards/svgs/d.svg"/></InnerDiv>
              <InnerDiv className="item8"><Box8 src="/images/cards/svgs/h.svg"/></InnerDiv>
            </Wrapper>
          </CenteredWrapper>
        </Container>
    </WrapperOut>





    
  )
}


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const CenteredWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto; /* Center horizontally */
  width: 60%;
  `;

const Wrapper = styled.div`
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  padding: 1px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a b b b b b b b b"
    "a a a b b b b b b b b"

    "c c c c d d d d e e e"
    "c c c c d d d d e e e"

    "f f f f g g g g h h h";
`;

const InnerDiv = styled.div`
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;

  &.item1 {
    grid-area: a;
  }

  &.item2 {
    grid-area: b;
  }

  &.item3 {
    grid-area: c;
  }

  &.item4 {
    grid-area: d;
  }
  &.item5 {
    grid-area: e;
  }
  &.item6 {
    grid-area: f;
  }
  &.item7 {
    grid-area: g;
  }
  &.item8 {
    grid-area: h;
  }
`;




const Box1=styled.img`
width: 100%;
height:100%;
padding: 1rem;
`

const Box2=styled.img`
width: 100%;
height:100%;
`

const Box3=styled.img`
width: 100%;
height:100%;
`

const Box4=styled.img`
width: 100%;
height:100%;
`

const Box5=styled.img`
width: 100%;
height:100%;
`

const Box6=styled.img`
width: 100%;
height:100%;
`

const Box7=styled.img`
width: 100%;
height:100%;
`

const Box8=styled.img`
width: 100%;
height:100%;
`


const WrapperOut=styled.div`
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