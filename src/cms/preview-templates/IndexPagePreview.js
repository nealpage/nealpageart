import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        link1={data.link1 || {}}
        link2={data.link2 || {}}
        link3={data.link3 || {}}
        link4={data.link4 || {}}
        link5={data.link5 || {}}
        iconlink1={data.iconlink1}
        iconlink2={data.iconlink2}
        midtext={data.midtext}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
