import React from "react"
import Hero from '../components/Hero'
import { Link, graphql } from "gatsby"


const Thanks = ({data}) => {
  return (
    <Hero
      fluid={data.file.childImageSharp.fluid}
    >
      <div className="absolute left-0 right-0">
        <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mx-6" >
          <h1 className="text-5xl text-gray-700 font-body">Thanks!</h1>
          <p className="text-gray-700 font-body">We have received your RSVP can't wait to see you!!</p>
          <button className="bg-red-400 text-white py-2 px-4 rounded block font-body mt-4">
            <Link to="/location">
              Back to Site
            </Link>
          </button>
        </div>
      </div>
    </Hero>
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

export default Thanks