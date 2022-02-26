import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
const About = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        title
        node_locale
      }
    }
  }
`)
  console.log("---- Data ---", data)
  return (
    <div>about</div>
  )
}

export default About