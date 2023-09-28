import React ,{ useState }from "react"
import styled,{ keyframes }from "styled-components"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import ReactCardFlip from 'react-card-flip';


function Introduction() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <Wrapper>
    <Container_Left_h1>
        <Heading>
            Introduction
        </Heading>

        <Container_Left_para>
                
            <Para>
            Netflix is the world’s leading subscription service for watching TV episodes and movies
            </Para>
                <br/>
            <Para>
            SwiftUI is hands-down the best way for designers to take a first step into code. Thanks to its live Preview, you can iterate quickly and create powerful user interfaces with a few lines of code that works for all of Apple's platforms. Take your static design to the next level and build real apps with the simplicity of a prototyping tool.
            </Para>
                <br/>
            <Para>
            We're using Sketch to design the interface and Shape for the illustrations. All design and source files are provided so that you can upgrade your UI skills while following the lessons.
            </Para>
        </Container_Left_para>
    </Container_Left_h1>
    
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <HoverCardContainer src="/images/cards/hovercardnew.png" />
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <HoverCardFlipedContainer src="/images/cards/hovercardanother.png" />
        </div>
      </ReactCardFlip>

      
    </Wrapper>
    
    
  )
}


export default Introduction

const Wrapper=styled.div`
margin-top: 18rem;
display: flex;
align-items: center;
gap: 64px;
`

const Heading=styled(H1)`
  color: #C80006;
  font-family: SF Pro Display;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

const Container_Left_h1=styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.9375rem;
  width: 28.21981rem;
`

const Container_Left_para=styled.div`
  width: 44.0625rem;
`

const Para=styled(H1)`

  text-align: left;
  color: #000;
  font-family: SF Pro Display;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 1.95rem */
  
`

const HoverCardContainer=styled.img`
display: inline;
width: 556px;
height: 411px;
margin-left: 12rem;

transition: all 1.5s cubic-bezier(0.7,-.5,0.3,1.8);

`
const HoverCardFlipedContainer=styled.img`
display: inline;
width: 556px;
height: 411px;
margin-left: 12rem;
transition: all 1.5s cubic-bezier(0.7,-.5,0.3,1.8);

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


