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

const Covid = ({ data }) => {
    return (
        <>
            <Hero
                style={{ height: '25vh' }} fluid={data.file.childImageSharp.fluid} >
            </Hero>
            <Layout className="max-w-4xl">
                <div className="px-16 pb-24">

                        <p className="text-md font-body mt-8">Hello family & friends!</p>
                        <br />
                        <p className="leading-loose text-md font-body">We just want to take a minute and thank each of you for your support during our latest adventures of wedding postponement. It has meant so much and we love each of you!
                        <br />
                        <p className="leading-loose text-md font-body">We understand that although we will be having our ceremony and reception on September 11, 2020 in Dickson, TN we recognize that not everyone invited will feel comfortable with traveling or attending in light of our current COVID climate. We completely understand and respect each of your decisions to attend or not, and know that we will find time to see each of you if we miss you in September! </p>
                        <br />
                        <p className="leading-loose text-md font-body">That being said, our wedding venue (although covered) is outdoors and Dickson is considered a more rural area outside of Nashville. We will be providing hand sanitizer and although we may hug and kiss you all less than we otherwise would - we are ready to CELEBRATE, eat good food (trust us - we picked GOOD FOOD!), enjoy some wine and local beer, and dance our butts off on the dance floor!</p>
                        <br />
                        <p className="leading-loose text-md font-body">We kindly ask that you submit your RSVP by August 11, 2020.</p>
                        <br />
                With love and joy,
                Isaac & Kathryn-Rose
                </p>
                </div>
            </Layout>
        </>
    )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "wash-hands.jpeg" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Covid