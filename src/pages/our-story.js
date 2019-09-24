import React from "react"
import Layout from "../components/layout"
import Hero from '../components/Hero'
import CountdownContainer from "../components/coutdown-container"

const ourStory = ({data}) => {
  return (
    <>
    <Hero
        style={{height: '75vh'}}
        fluid={data.file.childImageSharp.fluid}
      >
        <div className="absolute left-0 right-0">

        <h1 className="font-display font-normal text-center text-4xl sm:text-5xl text-white">Countdown To The Wedding</h1>
        <CountdownContainer 
            targetDate={"2020-05-23 16:00:00"}
            daysLabel="Days"
            hoursLabel="Hours"
            minutesLabel="Minutes"
            secondsLabel="Seconds"
            />
        </div>
      </Hero>
    <Layout>
      <div className="flex border-2">

      <div className="font-body w-1/2 border-2 border-red-500" > 
        We met each other on a dating app – yes an app! At the time,
        I was just returning from a work trip to Ireland,
        and Isaac was told by a friend to check out this app “Coffee Meets Bagel”.Although neither of us took online dating seriously,
        we happened to match and shortly after that Isaac asked me out to coffee.He wore his camo Addias shirt(which for those of you fortunate enough to know my stance on camo know this was a potential strike one in my book !)and had the sweetest smile and kindest eyes.What we both thought would be a quick coffee date turned into lunch…and 7 hours later we both left with a feeling that this might be more than just causal coffee.After 2 more dates,
        we made it “official” and haven’t looked back since.We’ve become each other’s best friend,
        adventure buddy,
        and confidant.We’ve grown together in our love and knowledge of each other and of the Lord,
        dreamt together of our future,
        and made incredible memories.We both are beyond thankful for those in our lives who have encouraged us,
        challenged us,
        and loved us.The both of us cannot wait to share our wedding day with you and start our journey together as man and wife !
      </div>
      <div className="w-1/2 border-2 border-blue-500">
        images
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
  }
`

export default ourStory
