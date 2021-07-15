import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby'


export const query = graphql`
{
    datoCmsAboutPage {
        titleOfPage
        specialTextTitle
        specialText
        aboutPage
        mainImage {
          url
        }
      }
  }
`;


const AboutPage = ({data}) => {
    return (
        <>
            <h1>{data.datoCmsAboutPage.titleOfPage}</h1>
            <p>{data.datoCmsAboutPage.aboutPage}</p>
            <SpecialBlock>
                <div className="texts">
                    <p>{data.datoCmsAboutPage.specialText}</p>
                    <h2>{data.datoCmsAboutPage.specialTextTitle}</h2>
                </div>
            </SpecialBlock>
            <BigImage src={data.datoCmsAboutPage.mainImage.url} alt="" />
        </>
    )
}


const SpecialBlock = styled.div`
display: flex;
justify-content: flex-start;

    .texts{
        width: 50vw;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        margin-top: 3rem;
    }

   

`
const BigImage = styled.img`
    height: 100vh;
    max-width: 50vw;
    object-fit: cover;
    position: absolute;
    top: 0 ;
    right: 0;
`

export default AboutPage
