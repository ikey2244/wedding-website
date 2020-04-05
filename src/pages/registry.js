import React from "react"
import Layout from '../components/layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

const Registry = ({data}) => {
  return (
    <>
      <Hero
          style={{height: '50vh'}}
          fluid={data.file.childImageSharp.fluid}
        >
          <div className="absolute left-0 right-0 z-10">
            <div className="text-center">
              <h1 className="text-white text-6xl font-display font-normal">Registry</h1>
            </div>
          </div>
        </Hero>
      <Layout>
          <div className="w-full p-8 sm:p-16 text-center relative">
            <Img className="w-full sm:max-w-md mx-auto z-10" fluid={data.amazon.childImageSharp.fluid} />
            <a className="bg-red-500 text-white text-lg font-hero rounded-full py-2 px-6 inline-block mt-8" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/wedding/kathryn-rose-mello-isaac-weber-dickson-may-2020/registry/35K4J4MCX1GO9">View Registry</a>
          </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "mr-mrs.png" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    amazon: file(relativePath: { eq: "amazon.png" }) {
      childImageSharp {
          fluid(maxWidth: 493, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    bedBath: file(relativePath: { eq: "bed-bath.png" }) {
      childImageSharp {
          fluid(maxWidth: 495, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`



export default Registry