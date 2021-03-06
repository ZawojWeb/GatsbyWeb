import React from 'react'
import Image from "gatsby-image"
import { graphql } from 'gatsby';

export const query = graphql`
  query querySingleArticle($postId: String!) {
    datoCmsArticle(id: {eq: $postId}){
      title
    author
    featurderimage {
      url
      fixed(width:500){
        ...GatsbyDatoCmsFixed_tracedSVG 
      }
    }
    author
    articleContent {
      ... on DatoCmsParagraph {
        paragraphContent
        id
      }
      ... on DatoCmsHeading {
        headingContent
        id
      }
      ... on DatoCmsArticleImage {
        image {
          url
        }
        id
      }
    }
    }
  }
`;


const post = ({data}) => {
    return (
      <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <Image fixed={data.datoCmsArticle.featurderimage.fixed} />
      <div>
        {
          data.datoCmsArticle.articleContent.map(item => {
            const [itemKey] = Object.keys(item);
            switch(itemKey){
              case 'paragraphContent':
                return <p key={item.id}>{item[itemKey]}</p>
              case 'headingContent':
                return <h2 key={item.id}>{item[itemKey]}</h2>
              case "image":
                return <Image key={item.id} fixed={item[itemKey].fixed} alt="" />
              default:
                return null;
            }
          })
        }
      </div>
    </div>
    )
}

export default post
