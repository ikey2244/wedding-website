import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
 
 
 
class Gallery extends React.Component {
    render() {
        return (
            <StaticQuery
                    query={graphql`
                    query allimgQuery {
                        source: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
                        edges {
                            node {
                                childImageSharp {
                                    fluid(maxWidth: 493, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        }
                    }
                    `}
                    render={data => (
                        <>
                        {data.source.edges.map(({ node }, i) => (
                            <Img key={i} className="gallery-images" fluid={node.childImageSharp.fluid} />
                    ))}
                    </>
                    )}
                />
        );
    }
}


 
export default Gallery;