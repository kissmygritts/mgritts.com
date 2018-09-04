import React from 'react'
// import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <div className="w-60 center">
      <h1>{ post.frontmatter.title}</h1>
      <div 
        dangerouslySetInnerHTML={{ __html: post.html }}
        className=""
      ></div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`