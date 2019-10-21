import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import { graphql } from 'gatsby'

const Accommodations = ({data}) => {
  return (
    <>
      <Hero
        style={{height: '75vh'}}
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="absolute left-0 right-0 z-10">
          <div className="text-center">
            <h1 className="text-white text-6xl font-display font-normal">Accommodations</h1>
          </div>
        </div>
      </Hero>
      <div id="more-info"></div>
      <Layout className="max-w-4xl">
        <div className="text-center mt-10">
          <h1 className="text-4xl leading-tight font-normal font-display mb-4">Coming Soon</h1>
          <p className="text-md max-w-2xl mx-auto leading-normal font-body font-light px-4">We are still working on gathering some hotel suggestions - check back soon!</p>
        </div>
        <div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "hotel.png" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    drink: file(relativePath: { eq: "drink.png" }) {
      childImageSharp {
          fluid(maxWidth: 493, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    nashville: file(relativePath: { eq: "nashville.png" }) {
      childImageSharp {
          fluid(maxWidth: 493, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    food: file(relativePath: { eq: "food.png" }) {
      childImageSharp {
          fluid(maxWidth: 493, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    coffee: file(relativePath: { eq: "coffee.png" }) {
      childImageSharp {
          fluid(maxWidth: 493, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Accommodations