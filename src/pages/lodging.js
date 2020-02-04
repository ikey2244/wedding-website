import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import { graphql } from 'gatsby'

const Lodging = ({data}) => {
  return (
    <>
      <Hero
        style={{height: '75vh'}}
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="absolute left-0 right-0 z-10">
          <div className="text-center">
            <h1 className="text-white text-6xl font-display font-normal">Lodging</h1>
          </div>
        </div>
      </Hero>
      <div id="more-info"></div>
      <Layout className="max-w-4xl">
        <div className=" flex flex-col flex-wrap lg:flex-row justify-around w-full z-20 relative">
          <div className="w-full lg:w-2/4 p-8 sm:p-16 text-center">
            <h1 className="text-3xl font-body">Best Western Dickson</h1>
            <p>Call and reserve a room under Isaac Weber</p>
            <a className= "bg-red-500 text-white text-lg font-hero rounded-full py-3 px-8 inline-block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/bDRGE1kJWovWG61B6"> 
              Directions
            </a>
            <a className="bg-white border-2 border-black text-black text-lg font-hero rounded-full mt-5 ml-5 py-3 px-8 inline-block" href="tel:6154460541">(615) 446-0541</a>
          </div>
          <div className="w-full lg:w-2/4 p-8 sm:p-16 text-center">
            <h1 className="text-3xl font-body">Comfort Suites Airport</h1>
            <p>Call and reserve a room under Isaac Weber</p>
            <a className= "bg-red-500 text-white text-lg font-hero rounded-full py-3 px-8 inline-block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/rXJt9opZjBW7CoiZA"> 
              Directions
            </a>
            <a className="bg-white border-2 border-black text-black text-lg font-hero rounded-full mt-5 ml-5 py-3 px-8 inline-block" href="tel:6154462781">(615) 446-2781</a>
          </div>
          <div className="w-full lg:w-2/4 p-8 sm:p-16 text-center">
            <h1 className="text-3xl font-body mb-4">Holiday Inn Express & Suites Dickson</h1>
            <a className= "bg-red-500 text-white text-lg font-hero rounded-full py-3 px-8 inline-block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/rXJt9opZjBW7CoiZA"> 
              Directions
            </a>
            <a className="bg-white border-2 border-black text-black text-lg font-hero rounded-full mt-5 ml-5 py-3 px-8 inline-block" target="_blank" rel="noopener noreferrer" href="https://www.choicehotels.com/reservations/groups/GL74X3">Click Here To Reserve Rooms</a>
          </div>
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

export default Lodging