import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import '../components/main.scss'
// import Nplogo from '../components/Nealpagelogo'
import Layout from '../components/Layout'
import Lottie from 'lottie-web';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
const igIcon = <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
const mailIcon = <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" />

export const IndexPageTemplate = ({
  title,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  link7,
  link8,
  iconlink1,
  iconlink2,
  midtext
}) => {

  console.log(iconlink2)
  function Nplogo() {

    const container = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: require('../img/nealpage.json')
        })

    }, [])
    return (
        <div className="container" ref={container}></div>
    )
  }
  
  const links = [link1, link2, link3, link4, link5, link6, link7, link8]
  
  const buildLinks = () => {
    return links.filter((l) => l.visible === true).map((l, i) => {
      if (l.active === true) {
        return <div key={i} className="subcontainer__link"><a className="main__a main__a--active" href={l.url}>{l.text}</a></div>
      } else {
        return <div key={i} className="subcontainer__link"><a className="main__a main__a--inactive" href={l.url}>{l.text}</a></div>
      }
    })
  }

  const activeSocialLinksStyles = 'main__a--nounderline main__a--active'
  const nonactiveSocialLinksStyles = 'main__a--nounderline main__a--inactive'

  return (
    <>
      <div className="subcontainer">
        <div></div>
        <div className="subcontainer__logoicons">
          <div className="subcontainer__logo">
              <Nplogo />
          </div>
          <div className="subcontainer__iconscontainer">
            {midtext.visible ? <div className="subcontainer__iconitem"><p className="subcontainer__comingsoon">{midtext.text}</p></div> : null}
            <div className="subcontainer__iconitem subcontainer__iconitemflex">
              {(iconlink1.visible) ? <a className={(iconlink1.active ? activeSocialLinksStyles : nonactiveSocialLinksStyles)} href={iconlink1.url}><div className="subcontainer__icon">{igIcon}</div></a> : null}
              {(iconlink2.visible) ? <a className={(iconlink2.active ? activeSocialLinksStyles : nonactiveSocialLinksStyles)} href={iconlink2.url}><div className="subcontainer__icon">{mailIcon}</div></a> : null}
            </div>
          </div>
        </div>
        
          <div className="subcontainer__links">
            {buildLinks()}
          </div>
      </div>
    </>
  )
}


IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  iconlink1: PropTypes.string,
  iconlink2: PropTypes.string,
  link1: PropTypes.object,
  link2: PropTypes.object,
  link3: PropTypes.object,
  link4: PropTypes.object,
  link5: PropTypes.object,
  link6: PropTypes.object,
  link7: PropTypes.object,
  link8: PropTypes.object,
  midtext: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.title}
        link1={frontmatter.link1}
        link2={frontmatter.link2}
        link3={frontmatter.link3}
        link4={frontmatter.link4}
        link5={frontmatter.link5}
        link6={frontmatter.link6}
        link7={frontmatter.link7}
        link8={frontmatter.link8}
        midtext={frontmatter.midtext}
        iconlink1={frontmatter.iconlink1}
        iconlink2={frontmatter.iconlink2}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        midtext {
          text
          visible
        }
        link1 {
          text
          url
          visible
          active
        }
        link2 {
          text
          url
          visible
          active
        }
        link3 {
          text
          url
          visible
          active
        }
        link4 {
          text
          url
          visible
          active
        }
        link5 {
          text
          url
          visible
          active
        }
        link6 {
          text
          url
          visible
          active
        }
        link7 {
          text
          url
          visible
          active
        }
        link8 {
          text
          url
          visible
          active
        }
        iconlink1 {
          url
          visible
          active
        }
        iconlink2 {
          url
          visible
          active
        }
      }
    }
  }
`
