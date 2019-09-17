import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

class TextImage extends React.Component {
  render() {
    const { children, isRev } = this.props
    return (
      <div className={isRev ? 'flex flex-col sm:flex-row-reverse my-8 sm:my-24': "flex flex-col sm:flex-row sm:my-24"}>
        <Img className="w-full sm:max-w-sm" fluid={this.props.img} />
        <div className="text-left sm:text-center w-full mt-8 sm:mt-0">
          <h1 className="font-display font-normal mb-2 sm:mb-4">Drinks</h1>
        
          <div className="pl-4 sm:ml-auto max-w-xs">
            <div className="text-left">
              <li><a className="text-red-500 cursor-pointer underline" href="https://www.pinewoodsocial.com/" target="_blank" rel="noopener noreferrer">Pinewood Social</a></li>
              <li><a className="text-red-500 cursor-pointer underline"href="http://www.lajacksonbar.com/" target="_blank" rel="noopener noreferrer">La Jackson</a></li>
              <li><a className="text-red-500 cursor-pointer underline"href="https://www.nashvilledowntown.com/destinations/nightlife" target="_blank" rel="noopener noreferrer">Broadway (if you are dare)</a></li>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextImage