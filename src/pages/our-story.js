import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import CountdownContainer from "../components/coutdown-container"
import Img from "gatsby-image"
import { graphql } from 'gatsby'

const ourStory = ({data}) => {
  return (
    <>
    <Hero
        style={{height: '75vh'}}
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="absolute left-0 right-0">

        <h1 className="font-display font-normal text-center text-3xl sm:text-5xl text-white mb-6">Countdown To The Wedding</h1>
        <CountdownContainer 
            targetDate={"2020-09-11 16:00:00"}
            daysLabel="Days"
            hoursLabel="Hours"
            minutesLabel="Minutes"
            secondsLabel="Seconds"
            />
        </div>
      </Hero>
    <Layout>
      <div className="flex-col md:flex md:flex-row mt-16 mb-16 px-6">

      <div className="w-full md:w-1/2" > 
        <h1 className="font-display font-normal text-4xl mb-4">Our Story</h1>
        <p className="font-body leading-relaxed mr-0 mb-8 sm:mb-0 md:mr-5">
        We met each other on a dating app – yes an app! We matched on "Coffee Meets Bagel" so naturally we went to a coffee shop on our first date!  What we both thought would be a quick date turned into lunch…and 7 hours later we both left with a feeling that this might be more than just something casual.
        <br/>
        <br/> After 2 more dates, we made it “official” and haven’t looked back since. We’ve become each other’s best friend, adventure buddy, and confidant. We’ve grown together in our love and knowledge of each other and of the Lord, dreamt together of our future, and made incredible memories. We both are beyond thankful for those in our lives who have encouraged us, challenged us, and loved us.  We cannot wait to share our wedding day with you and start our journey together as husband and wife!
        </p>
      </div>
      <div className="w-full md:w-1/2 ml-0 md:ml-4">
        <div className="w-full flex mb-4">
          <Img className="flex-1 mr-4" fluid={data.topLeftPick.childImageSharp.fluid} />
          <Img className="flex-1" fluid={data.topRightPick.childImageSharp.fluid} />
        </div>
        <Img fluid={data.bottomPic.childImageSharp.fluid} />
      </div>
      </div>
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "countdown.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    topLeftPick: file(relativePath: { eq: "little-pic-1.png" }) {
      childImageSharp {
          fluid(maxWidth: 293, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    topRightPick: file(relativePath: { eq: "little-pic-2.png" }) {
      childImageSharp {
          fluid(maxWidth: 293, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    bottomPic: file(relativePath: { eq: "bigger-pic.png" }) {
      childImageSharp {
          fluid(maxWidth: 620, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`

export default ourStory
