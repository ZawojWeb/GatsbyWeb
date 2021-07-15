import { graphql } from 'gatsby'
import React from 'react'
import ArticlePreview from '../components/ArticlePreview';
import PageInfo from '../components/PageInfo';
import styled from 'styled-components';
import slugify from 'slugify';

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ArticlesPage = ({data}) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;
    return (
      <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
      {nodes.map(({ title, featurderimage }) => (
          <ArticlePreview
            key={title}
            title={title}
            image={featurderimage.fluid}
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticlesWrapper>
    </>
    )
}

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`;

export const query = graphql`
   {
    allDatoCmsArticle {
      nodes {
        title
        featurderimage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
   }
`

export default ArticlesPage
