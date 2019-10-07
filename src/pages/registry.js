import React from "react"
import Layout from '../components/layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'

const Registry = ({data}) => {
  return (
    <>
      <Hero
          style={{height: '75vh'}}
          fluid={data.file.childImageSharp.fluid}
        >
          <div className="absolute left-0 right-0 z-10">
            <div className="text-center">
              <h1 className="text-white text-6xl font-display font-normal">Registry</h1>
            </div>
          </div>
        </Hero>
      <Layout >
        <div className="mt-6">
          <h1>Amazon</h1>
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
    }
  }
`



export default Registry