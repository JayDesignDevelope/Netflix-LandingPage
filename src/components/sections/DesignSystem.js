import React from 'react'
import styled from "styled-components"

export default function DesignSystem() {
return (
<Wrapper>
    <ContentWrapper>
        <ParentBox>
            <Box1 src="/images/cards/b11.png"/>
            <Box2 src="/images/cards/b2.png"/>
            <Box3 src="/images/cards/b3.png"/>
            <Box4 src="/images/cards/b4.png"/>
            <Box5 src="/images/cards/b5.png"/>
            <Box6 src="/images/cards/b6.png"/>
            <Box7 src="/images/logos/netflixnewlogo.png"/>
            <Box8 src="/images/cards/figmabtn.png"/>




        </ParentBox>

        

    
    </ContentWrapper>
</Wrapper>
)
}
const Wrapper = styled.div`
display: inline-flex;
margin-left: 13%;

padding: 1.25rem;


border-radius: 1.25rem;
border: 0.5px solid rgba(255, 255, 255, 0.20);
background: rgba(15, 14, 71, 0.30);
box-shadow: 0px 50px 100px 0px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(20px);
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


const Title=styled.div`
font-size:3rem;
`

const Box1=styled.img`
margin: 1rem;
width: 334px;
height: 284px
`

const Box2=styled.img`
width: 32rem;
height: auto;
right: 10%;
`

const Box3=styled.img`
margin: 0.5rem;
width: auto;
height: auto
`

const Box4=styled.img`
margin: 0.5rem;

width: auto;
height: auto
`

const Box5=styled.img`
margin: 0.5rem;

width: auto;
height: auto
`
const Box6=styled.img`
margin: 0.5rem;

width: auto;
height: auto
`

const Box7=styled.img`
margin: 0.5rem;
position: absolute;
margin-bottom: 4rem;
top: 45%;
width: 15rem;
height: 15rem
`

const Box8=styled.img`
bottom:1%;
width: auto;
height: auto;
position: absolute;
cursor: pointer;
`


const ParentBox=styled.div`

`

