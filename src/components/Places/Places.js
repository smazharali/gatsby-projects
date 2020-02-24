import React from "react"
import PlaceList from "./PlaceList"
import { useStaticQuery, graphql } from "gatsby"

const getPlaces = graphql` 
query {
   places: allContentfulProject1Data {
      edges {
        node {
           name
           timeRequired
           slug
           contentful_id
           entryFees
           timings
           images {
              fluid {
                ...GatsbyContentfulFluid
              }
           }
        }
      }
   }
} 
`;

const Places = () => {
  const { places } = useStaticQuery(getPlaces)
  console.log(places);
  return (
     <PlaceList places={places} />
  )
}

export default Places
