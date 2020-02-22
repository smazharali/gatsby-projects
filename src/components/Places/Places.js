import React from "react"
import PlaceList from "./PlaceList"
import { useStaticQuery, graphql } from "gatsby"

const getPlaces = graphql` 
query {
   places: allContentfulProject1Data {
      edges {
        node {
           contentful_id
           name
           timeRequired
           slug
           timings
           entryFees
           images {
              fluid {
                src
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
