const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  posttype
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          console.log(post.node.posttype)
          if (post.node.posttype == "service")
          {
            console.log('creating service')
            createPage({
              path: `/services/${post.node.slug}/`,
              component: blogPost,
              context: {
                slug: post.node.slug
              },
            })
          }
          else
          {
            console.log('creating blog')
            createPage({
              path: `/blog/${post.node.slug}/`,
              component: blogPost,
              context: {
                slug: post.node.slug
              },
            })
          }
        })
      })
    )
  })
}
