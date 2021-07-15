import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const IndexPage = ({data}) => (
  <>
    <ContentWrapper>
      <h1>Lorem ipsum dolor</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, odio!</p>
      <Buttton>estaimte project</Buttton>
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} ></StyledImage>
  </>
)

export const query = graphql`
  {
    file(name:{eq:"hero"}){
      childImageSharp{
        fluid(,maxWidth:800, maxHeight:1200,quality:90){
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const ContentWrapper = styled.div`
  width: 60%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1{
    font-size: 6rem;
    width: 80%;
    line-height: 0.9;
  }
  p{
    margin: 1rem 0rem 2rem;
    width: 50%;
    font-size: 1.2rem;
  }

`

const StyledImage = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  object-fit: cover;
`
const Buttton  = styled.button`
  border: none;
  padding: 0.6rem;
  background-color: black;
  color: white;
`

export default IndexPage

