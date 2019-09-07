import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const CoverPage = () => {
  const {
    coverImageDesktop,
    coverImageMobile,
  } = useStaticQuery(graphql`
    query {
     coverImageDesktop: file(relativePath: { eq: "cover-page-picture.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
     coverImageMobile: file(relativePath: { eq: "cover-page-picture-mobile.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

const backgroundFluidImageStack = [
  coverImageMobile.childImageSharp.fluid,
  coverImageDesktop.childImageSharp.fluid,
]

  return (
    <div>
      <BackgroundImage
          Tag="section"
          className='cover'
          fluid={backgroundFluidImageStack}
        >
        <div class="cover-container">
          <h1 style={{
            fontFamily: `Great Vibes`,
            color: 'white',
            fontSize: '64px',
            fontWeight: 'normal',
            marginBottom: '8px'
          }}>May 23rd 2020</h1>
          <p style={{
            fontFamily: `Open Sans`,
            color: 'white',
            fontSize: '18px',
            fontWeight: 'normal',
            marginBottom: '29px',
            marginTop: '16px'
          }}>Save the date! We can’t wait to start this journey together.</p>
          <Link
            to="/page-2"
            style={{
              background: 'white',
              height: '50px',
              padding: '13px 40px',
              color: 'black',
              fontFamily: 'Open Sans',
              fontWeight: '600',
              borderRadius: '10px',
              display: 'inline-block',
              textDecoration: 'none'
            }}
          >
            Enter
          </Link>
        </div>
      </BackgroundImage>
    </div>
  )
}

export default CoverPage