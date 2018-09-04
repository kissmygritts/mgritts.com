import React from 'react'
// import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import './dracula.css'

export default ({ data }) => {
  const { markdownRemark: post } = data

  return <div className="w-90 w-75-m w-60-l center mv4">
      <Link to="/" className="f6 link br2 ba ph3 pv2 dib green mr2 bg-animate hover-bg-green hover-white">
        Home
      </Link>
      <h1 className="f2 lh-title mb2">{post.frontmatter.title}</h1>
      <h2 className="f4 lh-copy">{post.frontmatter.date}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} className="" />
    </div>
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