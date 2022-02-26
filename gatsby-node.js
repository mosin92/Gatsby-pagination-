const path = require("path")
const slugify = require('slugify')
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(`
    query GetAllBlogPost{
            allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
              nodes {
                title
                date(formatString: "DD MMMM, YYYY")
                excerpt {
                  excerpt
                }
              }
            }
        }
        `)
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    const blogPostTemp = path.resolve("./src/templates/BlogPost.js")
    const post = result.data.allContentfulBlogPost.nodes
    post.forEach(item => {
        const slug = slugify(item.title, { lower: true })
        createPage({
            path: slug,
            component: blogPostTemp,
            context: {
                slug: item.title
            }
        })
        console.log("--- Slug ---- ", slug)
    })
    console.log(" ----  resust ----- ", result)
    const posts = result.data.allContentfulBlogPost.nodes
    console.log("---  Posts --- ", posts)
    const postsPerPage = 2
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/templates/BlogTemplate.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
}