import React from "react"
import Img from "gatsby-image"

class TextImage extends React.Component {
  render() {
    const { isRev, img, links, label } = this.props

    return (
      <div className={isRev ? 'flex flex-col sm:flex-row-reverse my-8 sm:my-24': "flex flex-col sm:flex-row sm:my-24"}>
        <Img className="w-full sm:max-w-md" fluid={img} />
        
        <div className="text-left pl-6 md:text-center w-full mt-8 sm:mt-0">
          <h1 className="font-display font-normal mb-2 sm:mb-4">{label}</h1>
          <div className="pl-4 sm:ml-auto max-w-xs">
            <div className="text-left">
            {
                links.data.map((v, i) => {
                  return (
                    <>
                      <li key={i}>
                        <a className="text-red-500 cursor-pointer underline" href={v.url} target="_blank" rel="noopener noreferrer">{v.name}</a>
                      </li>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextImage