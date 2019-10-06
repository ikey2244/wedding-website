import React from "react"
import Form from '../components/form'
import Layout from "../components/layout"
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Select from 'react-select'

const Rsvp = ({data}) => {
  return (
    <>
      <Hero
          fluid={data.file.childImageSharp.fluid}
        >
           <div className="absolute left-0 right-0">
              <h1 className="font-display font-normal text-center text-white text-4xl">Join Us</h1>
              
              <Form />
           </div>
        </Hero>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "location.png" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Rsvp
