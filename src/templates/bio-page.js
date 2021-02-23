import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import '../components/bio.scss'

import Layout from '../components/Layout'

export const BioPageTemplate = ({
  image,
  title,
  bioinfo,
}) => (
    <>
      <div className="subcontainer">
        <div></div>
        <div className="bio__desccontainer">
            <h1 className="bio__title">{bioinfo.title}</h1>
            <p>{bioinfo.description}</p>
        </div>
        <div className="bio__image" style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
        }} >
        </div>      
      </div>
    </>
)

BioPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  bioinfo: PropTypes.object,
}

const BioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BioPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        bioinfo={frontmatter.bioinfo}
      />
    </Layout>
  )
}

BioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BioPage

export const pageQuery = graphql`
  query BioPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "bio-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bioinfo {
          title
          description
        }
      }
    }
  }
`
