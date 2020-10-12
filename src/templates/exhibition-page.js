import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import '../components/exhibition.scss'

import Layout from '../components/Layout'

export const ExhibitionPageTemplate = ({
  image,
  title,
  mainpitch,
  exhibition1,
  ex1_img1,
  ex1_img2,
  ex1_img3,
  ex1_img4,
  ex1_img5,
  exhibition2,
  ex2_img1,
  ex2_img2,
  ex2_img3,
  ex2_img4,
  ex2_img5,
  exhibition3,
  ex3_img1,
  ex3_img2,
  ex3_img3,
  ex3_img4,
  ex3_img5 
}) => {
  
  // console.log(exhibition1)
  return (
  <div className="exh">
  {exhibition1.visible ? <div className="exh_subcontainer">
    <div></div>
    <div className="exh__imgcontainer">
      {
        exhibition1.img1visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex1_img1.childImageSharp ? ex1_img1.childImageSharp.fluid.src : ex1_img1
          })`,
      }} ></div> : null
      }
      {
        exhibition1.img2visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex1_img2.childImageSharp ? ex1_img2.childImageSharp.fluid.src : ex1_img2
          })`,
      }} ></div> : null
      }
      {
        exhibition1.img3visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex1_img3.childImageSharp ? ex1_img3.childImageSharp.fluid.src : ex1_img3
          })`,
      }} ></div> : null
      }
      {
        exhibition1.img4visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex1_img4.childImageSharp ? ex1_img4.childImageSharp.fluid.src : ex1_img4
          })`,
      }} ></div> : null
      }
      {
        exhibition1.img5visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex1_img5.childImageSharp ? ex1_img5.childImageSharp.fluid.src : ex1_img5
          })`,
      }} ></div> : null
      }
    </div>
    <div className="exh__desccontainer">
        <h1 className="exh__title">{exhibition1.title}</h1>
        <p>{exhibition1.description}</p>
    </div>
        
  </div> : null}

  {exhibition2.visible ? <div className="exh_subcontainer">
    <div></div>
    <div className="exh__imgcontainer">
      {
        exhibition2.img1visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex2_img1.childImageSharp ? ex2_img1.childImageSharp.fluid.src : ex2_img1
          })`,
      }} ></div> : null
      }
      {
        exhibition2.img2visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex2_img2.childImageSharp ? ex2_img2.childImageSharp.fluid.src : ex2_img2
          })`,
      }} ></div> : null
      }
      {
        exhibition2.img3visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex2_img3.childImageSharp ? ex2_img3.childImageSharp.fluid.src : ex2_img3
          })`,
      }} ></div> : null
      }
      {
        exhibition2.img4visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex2_img4.childImageSharp ? ex2_img4.childImageSharp.fluid.src : ex2_img4
          })`,
      }} ></div> : null
      }
      {
        exhibition2.img5visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex2_img5.childImageSharp ? ex2_img5.childImageSharp.fluid.src : ex2_img5
          })`,
      }} ></div> : null
      }
    </div>
    <div className="exh__desccontainer">
        <h1 className="exh__title">{exhibition2.title}</h1>
        <p>{exhibition2.description}</p>
    </div>
        
  </div> : null}

  {exhibition3.visible ? <div className="exh_subcontainer">
    <div></div>
    <div className="exh__imgcontainer">
      {
        exhibition3.img1visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex3_img1.childImageSharp ? ex3_img1.childImageSharp.fluid.src : ex3_img1
          })`,
      }} ></div> : null
      }
      {
        exhibition3.img2visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex3_img2.childImageSharp ? ex3_img2.childImageSharp.fluid.src : ex3_img2
          })`,
      }} ></div> : null
      }
      {
        exhibition3.img3visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex3_img3.childImageSharp ? ex3_img3.childImageSharp.fluid.src : ex3_img3
          })`,
      }} ></div> : null
      }
      {
        exhibition3.img4visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex3_img4.childImageSharp ? ex3_img4.childImageSharp.fluid.src : ex3_img4
          })`,
      }} ></div> : null
      }
      {
        exhibition3.img5visible ? <div className="exh__image" style={{
          backgroundImage: `url(${
            !!ex3_img5.childImageSharp ? ex3_img5.childImageSharp.fluid.src : ex3_img5
          })`,
      }} ></div> : null
      }
    </div>
    <div className="exh__desccontainer">
        <h1 className="exh__title">{exhibition3.title}</h1>
        <p>{exhibition3.description}</p>
    </div>
        
  </div> : null}
</div>
)}

ExhibitionPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  mainpitch: PropTypes.object,
  exhibition1: PropTypes.object,
  ex1_img1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex1_img2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex1_img3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex1_img4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex1_img5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  exhibition2: PropTypes.object,
  ex2_img1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex2_img2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex2_img3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex2_img4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex2_img5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  exhibition3: PropTypes.object,
  ex3_img1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex3_img2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex3_img3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex3_img4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  ex3_img5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ExhibitionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ExhibitionPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        mainpitch={frontmatter.mainpitch}
        exhibition1={frontmatter.exhibition1}
        ex1_img1={frontmatter.ex1_img1}
        ex1_img2={frontmatter.ex1_img2}
        ex1_img3={frontmatter.ex1_img3}
        ex1_img4={frontmatter.ex1_img4}
        ex1_img5={frontmatter.ex1_img5}
        exhibition2={frontmatter.exhibition2}
        ex2_img1={frontmatter.ex2_img1}
        ex2_img2={frontmatter.ex2_img2}
        ex2_img3={frontmatter.ex2_img3}
        ex2_img4={frontmatter.ex2_img4}
        ex2_img5={frontmatter.ex2_img5}
        exhibition3={frontmatter.exhibition3}
        ex3_img1={frontmatter.ex3_img1}
        ex3_img2={frontmatter.ex3_img2}
        ex3_img3={frontmatter.ex3_img3}
        ex3_img4={frontmatter.ex3_img4}
        ex3_img5={frontmatter.ex3_img5}
      />
    </Layout>
  )
}

ExhibitionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ExhibitionPage

export const pageQuery = graphql`
  query ExhibitionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "exhibition-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
        }
        exhibition1 {
          title
          visible
          description
          img1visible
          img2visible
          img3visible
          img4visible
          img5visible
        }
        ex1_img1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex1_img2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex1_img3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex1_img4 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex1_img5 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        exhibition2 {
          title
          visible
          description
          img1visible
          img2visible
          img3visible
          img4visible
          img5visible
        }
        ex2_img1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex2_img2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex2_img3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex2_img4 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex2_img5 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        exhibition3 {
          title
          visible
          description
          img1visible
          img2visible
          img3visible
          img4visible
          img5visible
        }
        ex3_img1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex3_img2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex3_img3 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex3_img4 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ex3_img5 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
