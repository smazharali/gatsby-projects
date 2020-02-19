import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
//import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
 query aboutImage {
  aboutImage: file(relativePath: {eq: "defaultBcg.jpeg"}) {
     childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
       }
     }
  }
}
`;


const About = () => {
  const { aboutImage } = useStaticQuery(getAbout);
  return (
     <section className={styles.about}>
        <Title title="about" subtitle="hampi" />
        <div className={styles.aboutCenter}>
           <article className={styles.aboutImg}>
             <div className={styles.imgContainer}>
               {/* <img src={img} alt="about company" /> */}
               <Img fluid={aboutImage.childImageSharp.fluid} alt="landscape" />
             </div>
           </article>
           <article className={styles.aboutInfo}>
             <h4>The abode of bygone ruins</h4>
             <p>
              Hampi, the city of ruins, is a UNESCO World Heritage Site.
              Situated in the shadowed depth of hills and vallyes
              in the state of Karnataka.
              this place is a historical delight for travellers.
             </p>
             <p>
               Surrouned by 500 ancient mountains,
               beautiful temples, bustlings street markets,
               bastions, treasury building and captivating
               remains of Vijayanagar Empire,
               Hampi is a backpacker's delight.
             </p>
             <a className="btn-primary" target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Hampi" >  
                read more
             </a>
           </article>
          </div>
        </section>
  )
}

export default About
