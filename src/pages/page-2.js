import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import arrow from '../images/arrow.svg'
import TextImage from '../components/text-image'

const SecondPage = ({data}) => {
  return (
    <>
      <Hero 
        style={{height: '75vh'}}
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="absolute left-0 right-0">
          <div className="text-center">
            <h1 className="text-white text-6xl font-display font-normal">Location</h1>
            <p className="text-3xl leading-tight text-white font-hero font-light my-8">1464 Big Bartons Creek Rd, Dickson, TN 37055</p>
            <a className="bg-red-500 text-white text-lg font-hero rounded-full py-3 px-6 inline-block" href="#my-cool-header">More Info</a>
          </div>
        </div>
      </Hero>
      <Layout>
        <div className="text-center mt-10">
          <h1 className="text-4xl leading-tight font-normal font-display">Firefly Lane Wedding Venue</h1>
          <p className="text-md max-w-xl mx-auto leading-normal font-body font-light">Firefly is a charming location in Dickson TN. It’s a secluded area where we can have lots of fun. It’s about 45 minutes from one of the coolest cities, Nashville! We have put together a list of fun things to do in the area</p>
        </div>
        <div>
          <TextImage img={data.drink.childImageSharp.fluid}/>
          <TextImage isRev img={data.drink.childImageSharp.fluid}/>
        </div>
      </Layout>
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
    },
    drink: file(relativePath: { eq: "drink.png" }) {
      childImageSharp {
          fluid(maxWidth: 493, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default SecondPage