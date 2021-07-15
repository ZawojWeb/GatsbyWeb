import React from 'react'
import { graphql } from 'gatsby'
import Image from "gatsby-image"
import styled from 'styled-components';

export const query = graphql`
{
    datoCmsGalleryPage {
        titleOfPage
        aboutGalleryPage
        galleryOfImage {
          url
          originalId
          fixed(width:500){
            ...GatsbyDatoCmsFixed_tracedSVG 
          }
        }
      }
  }
`;

const GalleryPage = ({data}) => {

    return (
        <>
             <h1>{data.datoCmsGalleryPage.titleOfPage}</h1>
            <p>{data.datoCmsGalleryPage.aboutGalleryPage}</p>
            <GalleryWrapper>
                {
                    data.datoCmsGalleryPage.galleryOfImage.map(image =>{
                        console.log(image.fixed);
                        return <Image key={image.originalId} fixed={image.fixed} alt="" />
                    })
                }
            </GalleryWrapper>
        </>
    )
}

export default GalleryPage

const GalleryWrapper = styled.div`
    margin-top: 100px;
    img{
        padding: 10px;
    }
`