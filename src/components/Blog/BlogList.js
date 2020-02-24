import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"


const getPosts = graphql`
query {
  posts: allContentfulPosts(sort:{fields: published,order:DESC}) {
    edges {
      node {
        title
        slug
        published
        author
        cid: contentful_id
      }
    }
  }
}
`;

const BlogList = () => {
    const { posts } = useStaticQuery(getPosts)

    return (
       <section className={styles.blog}>
          <Title title="tourism" subtitle="blog" />
          <div className={styles.center}>
              {posts.edges.map(({ node }) => {
                 return <BlogCard key={node.cid} blog={node} /> 
              })}
          </div>
       </section>
    )
}

export default BlogList
