import React from "react"
import { graphql, Link } from 'gatsby'
import Hero from '../components/Hero'

const IndexPage = (props) => {
  const {data} = props
  const sources = [
    data.coverMobile.childImageSharp.fluid,
    {
      ...data.coverDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`
    }
  ]

  return (
    <>
    <Hero fluid={sources}>
      <div className="cover-container">
          <h1 style={{
            fontFamily: `Great Vibes`,
            color: 'white',
            fontSize: '64px',
            fontWeight: 'normal',
            marginBottom: '8px'
          }} className="date">May 23rd 2020</h1>
          <p className="text" style={{
            fontFamily: `Poppins`,
            color: 'white',
            fontSize: '18px',
            fontWeight: 'normal',
            marginBottom: '29px',
            marginTop: '16px',
            maxWidth: '309px'
          }}>Save the date! We can’t wait to start this journey together.</p>
          <Link
            to="/our-story"
            style={{
              background: 'white',
              height: '50px',
              padding: '13px 40px',
              color: 'black',
              fontFamily: 'Poppins',
              fontWeight: '400',
              borderRadius: '10px',
              display: 'inline-block',
              textDecoration: 'none'
            }}
            >
            Enter
          </Link>
        </div>
      </Hero>
    </>
  )
}

export const pageQuery = graphql`
  query indexQuery {
    coverMobile: file(relativePath: { eq: "cover-mobile.png" }) {
      childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    coverDesktop: file(relativePath: { eq: "cover-desktop.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
