import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import TextImage from '../components/text-image'
import { graphql } from 'gatsby'
import {
  drink,
  nashville,
  coffee,
  food,
  drinkLabel,
  todoLabel,
  foodLabel,
  coffeeLabel
} from '../../links'

const Location = ({data}) => {
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
            <a className="bg-red-500 text-white text-lg font-hero rounded-full py-3 px-6 inline-block" href="#more-info">More Info</a>
          </div>
        </div>
      </Hero>
      <div id="more-info"></div>
      <Layout className="max-w-4xl">
        <div className="text-center mt-10">
          <h1 className="text-4xl leading-tight font-normal font-display">Firefly Lane Wedding Venue</h1>
          <p className="text-md max-w-2xl mx-auto leading-normal font-body font-light">Firefly is a charming location in Dickson TN. It’s a secluded area where we can have lots of fun. It’s about 45 minutes from one of the coolest cities, Nashville! We have put together a list of fun things to do in the area</p>
        </div>
        <div>
          <TextImage label={todoLabel} links={nashville}  isRev img={data.nashville.childImageSharp.fluid}/>
          <TextImage label={foodLabel} links={food} img={data.food.childImageSharp.fluid}/>
          <TextImage label={coffeeLabel} links={coffee} isRev img={data.coffee.childImageSharp.fluid}/>
          <TextImage label={drinkLabel} links={drink} img={data.drink.childImageSharp.fluid}/>
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

export default Location