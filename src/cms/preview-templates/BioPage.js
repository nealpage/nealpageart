import React from 'react'
import PropTypes from 'prop-types'
import { BioPageTemplate } from '../../templates/bio-page'

const BioPage = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BioPageTemplate
        content={widgetFor('body')}
        image={getAsset(data.image)}
        title={data.title}
        bioinfo={data.bioinfo || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BioPage.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default BioPage
