import React from "react"
import styles from "../../css/blog-card.module.css"

const BlogCard = ({ blog }) => {
    const { title, published } = blog
    return (
       <article className={styles.blog}>
        <div className={styles.imgContainer}>
            <h6 className={styles.date}>{published}</h6>
        </div>
        <div className={styles.footer}>
            <h4>{title}</h4>
        </div>
       </article>
    )
}

export default BlogCard
