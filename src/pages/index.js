import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero";
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Tips from "../components/Home/Tips"
import { graphql } from "gatsby"
import FeaturedPlaces from "../components/Home/FeaturedPlaces"

export const query = graphql `
  query {
     defaultBcg: file(relativePath: {eq:"defaultBcg.jpeg"}) {
         childImageSharp {
             fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
            } 
        }
     }
  }
`

export default ({ data }) => (
    <Layout>
    <SimpleHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="Awesome Hampi"
              info="Come and explore Hampi, the city of ruins, which is a UNESCO World Heritage site."
      >
       <AniLink paintDrip hex="AEECEE" to="/places" className="btn-white">explore places</AniLink>
      </Banner>
    </SimpleHero>
    <About />
    <Tips />
    <FeaturedPlaces />
    </Layout>
)
