import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import { graphql, } from 'gatsby'
const GalleryPage = ({data}) => {
  return (
    <>
      <Hero
        style={{height: '75vh'}}
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="absolute left-0 right-0 z-10">
          <div className="text-center">
            <h1 className="text-white text-6xl font-display font-normal">Gallery</h1>
          </div>
        </div>
      </Hero>
      <Layout>
        <div className="w-full flex flex-wrap sm:flex-row sm:justify-center mt-6">
          <Gallery />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "wedding-shoes.png" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    source: allFile(filter: {absolutePath: {regex: "/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default GalleryPage