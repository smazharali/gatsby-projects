import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaTypo3, FaClock } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Template = ({ data }) => {
   const { name, timeRequired, timings, entryFees, description: { description }, images } = data.place;
   const [mainImage, ...placeImages]=images
   return (
     <Layout>
       <StyledHero img={mainImage.fluid} />
       <section className={styles.center}>
        <div className={styles.center}>
            <div className={styles.images}>
               {placeImages && placeImages.map((item,index) => {
                return <Img key={index} fluid={item.fluid} alt="single" className={styles.imag} /> 
               })}
            </div>
            <h2>{name}</h2>
            <div className={styles.info}>
                <p>
                  <FaMoneyBillWave className={styles.icon} /> Entry Fees - {entryFees}
                </p>
                <p>
                  <FaClock className={styles.icon} /> Time Required - {timeRequired}
                </p>
               { timings ?
                <p>
                  <FaTypo3 className={styles.icon} /> Timings - {timings}
                </p>:
                <></>
               }
            </div>
            <p className={styles.desc}>{description}</p>
            <AniLink fade to="/places" className="btn-primary">back to tours</AniLink>
        </div>
      </section>
     </Layout>
  )
}

export const query = graphql`
query ($slug: String) {
  place: contentfulProject1Data(slug: {eq: $slug}) {
    name
    slug
    timeRequired
    timings
    entryFees
    description {
      description
    }
    images {
      fluid {
        ...GatsbyContentfulFluid_tracedSVG
      }
    }
  }
}
`;


export default Template
