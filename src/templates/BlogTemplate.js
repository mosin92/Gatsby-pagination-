import React from 'react'
import { graphql, Link } from "gatsby"
import * as ContentListStyles from '../styles/ContentList.module.css'
import slugify from 'slugify'
import Pagination from '../Components/Pagination'
const BlogTemplate = ({ data, pageContext }) => {
  console.log("--- context --- ", pageContext)
  const { currentPage, numPages } = pageContext
  console.log("SingleBlogPost Data", data)
  const { allContentfulBlogPost: { nodes: posts } } = data
  return (
    <>
      <h1 style={{ "textAlign": "center", marginTop: "2rem" }}> Gatsby Contentful Pagination</h1>
      <ol className={ContentListStyles.contentList}>
        {
          posts.map((item, i) => {
            const slug = slugify(item.title, { lower: true })
            return (
              <li key={i}>
                <article className={ContentListStyles.contentList__post}>
                  <small>{item.date}</small>
                  <Link to={`/${slug}`}>
                    <h2 className={ContentListStyles.contentList__title}>
                      {item.title}
                    </h2>
                  </Link>
                </article>
              </li>
            )
          }
          )
        }
      </ol>
      <Pagination currentPage={currentPage} totalPage={numPages} />
    </>
  )
}

export default BlogTemplate

export const query = graphql`
query blogPageQuery($skip: Int!, $limit: Int!){
    allContentfulBlogPost(
      filter: {node_locale: {eq: "en-US"}}
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        date(formatString: "DD MMMM, YYYY")
        excerpt {
          excerpt
        }
      }
    }
  }
`