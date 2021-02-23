import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'

import '../components/bio.scss'

import Layout from '../components/Layout'

export const BioPageTemplate = ({
  content,
  contentComponent,
  image,
  title,
  bioinfo,
}) => {
  const PostContent = contentComponent || Content

return (
    <>
      <div className="subcontainer">
        <div></div>
        <div className="bio__desccontainer">
            <h1 className="bio__title">{bioinfo.title}</h1>
            {/* <p>{bioinfo.description}</p> */}
            <div><PostContent content={content} /></div>
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
}


BioPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  bioinfo: PropTypes.object,
}

const BioPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <BioPageTemplate
        content={html}
        contentComponent={HTMLContent}
        image={frontmatter.image}
        title={frontmatter.title}
        body={frontmatter.body}
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
      html
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
        }
      }
    }
  }
`
