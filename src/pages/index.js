import React from 'react'
import { Link, graphql } from 'gatsby'

import Hero from '../components/hero'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />

    <div className="flex flex-column items-center">
      <div className="avenir w-90 w-80-m w-two-thirds-l">
        <h3 className="f3 fw5">Articles</h3>

        {/* post list */}
        <div className="flex flex-column">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={ node.fields.slug } className="pointer">
              <div
                key={node.id}
                className="flex flex-row justify-between flex-wrap pb2 f4 mid-gray"
              >
                <div className="w-100 w-two-thirds-l">
                  {node.frontmatter.title}
                </div>
                <div className="silver">
                  <small>{node.frontmatter.date}</small>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* About */}
        <h3 className="f3 fw5 mt4">About</h3>
        <p className="lh-copy">
          I'm a wildlife ecologist and all around data nerd. I work as a data
          manager and web developer at the Nevada Department of Wildlife.
          Lately, I've been working on designing fullstack data management
          systems to make our biologists jobs easier.
        </p>
        <h4 className="f4 fw4">Open Lab Notebook</h4>
        <p className="lh-copy">
          After reading Carl Boettiger's lab notebooks and OpenWetWare I've
          decided to use this site as my "lab notebook". I'm a huge fan of open
          source, and in an effort to contribute to the open source community I
          will share my work as best I can on this site.
        </p>

        <p className="mv5 i silver fw2">
          Obligatory disclaimer: content herein are solely my own opinions and
          do not reflect the official policies of the Nevada Department of
          Wildlife, or the Government of the State of Nevada.
        </p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
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
