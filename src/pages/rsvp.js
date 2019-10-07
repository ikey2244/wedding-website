import React from "react"
import Form from '../components/form'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Rsvp = ({data}) => {
  return (
    <>
      <Hero
          fluid={data.file.childImageSharp.fluid}
        >
           <div className="absolute left-0 right-0 z-20">
              <h1 className="font-display font-normal text-center text-white text-5xl mb-6">Join Us</h1>
              <Form />
           </div>
        </Hero>
        <Layout/>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "flowers.png" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Rsvp
