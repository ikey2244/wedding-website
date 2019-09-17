import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`

const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || '100vh'};
  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props => props.fit || 'cover'} !important; object-position: ${props => props.position || '50% 50%'} !important;'
  }
`

class Hero extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Container>
        <BgImage {...this.props}/>
          {children}
      </Container>
    )
  }
}

export default Hero