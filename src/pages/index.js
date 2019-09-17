import React from "react"
import {graphql, Link} from 'gatsby'
import Hero from '../components/Hero'

const IndexPage = ({data}) => {
  const sources = [
    data.heroMobile.childImageSharp.fluid,
    {
      ...data.heroDesktop.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ]

  return (
  <Hero fluid={sources}>
    <div class="cover-container">
        <h1 style={{
          fontFamily: `Great Vibes`,
          color: 'white',
          fontSize: '64px',
          fontWeight: 'normal',
          marginBottom: '8px'
        }} class="date">May 23rd 2020</h1>
        <p class="text" style={{
          fontFamily: `Poppins`,
          color: 'white',
          fontSize: '18px',
          fontWeight: 'normal',
          marginBottom: '29px',
          marginTop: '16px',
          maxWidth: '309px'
        }}>Save the date! We can’t wait to start this journey together.</p>
        <Link
          to="/page-2"
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
  )
}

export const pageQuery = graphql`
  query indexQuery {
    heroMobile: file(relativePath: { eq: "cover-page-picture-mobile.png" }) {
      childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    heroDesktop: file(relativePath: { eq: "cover-page-picture.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
