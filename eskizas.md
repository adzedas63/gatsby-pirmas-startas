npm run build


git add .
git commit -am "final gatsby site"
git remote add origin https://github.com/adzedas63/ArunasDz-kalnai.git
git branch -M master
git push -u origin master

GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID=erdktrf4iyzp
CONTENTFUL_ACCESS_TOKEN=fKgDl-C18mdq6UEZWFOu7tLAVp_KT0NpYvu9qtWTp70


cd Desktop
gatsby new gatsby-bootcamp https://github.com/gatsbyjs/gatsby-starter-hello-world

================================

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  
  const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)


  export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`



const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulGatsbyBootcamp {
                node {
                    slug
                }
            }
        }
    `)

    res.data.allContentfulGatsbyBootcamp.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}

==========================================

import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

/*
export const query = graphql`
  query($slug: String!) {
    contentfulGatsbyBootcamp(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
*/
const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulGatsbyBootcamp.title}/>
      <h1>{props.data.contentfulGatsbyBootcamp.title}</h1>
      <p>{props.data.contentfulGatsbyBootcamp.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulGatsbyBootcamp.body.json, options)}
    </Layout>
  )
}

export default Blog


======================

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

==============

npm i "@contentful/rich-text-react-renderer"