import React from 'react'
import { Link, graphql } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />

    <div className="flex flex-column items-center">
      <div className="avenir w-90 w-60-l">
        <h3 className="f3 fw5">Articles</h3>

        
        <div className="flex flex-column">  {/* post list */}
          { data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={ node.id } className="flex flex-row pb2 f4">  {/* post */}
              <div className="mr4 silver">{ node.frontmatter.date }</div>
              <div>
                <Link to={ node.fields.slug }
                      className="no-underline hover-green underline-hover dark-gray">
                        {node.frontmatter.title}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date
          }
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
