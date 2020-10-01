import React from 'react'
import PropTypes from 'prop-types'
import { ExhibitionPageTemplate } from '../../templates/exhibition-page'

const ExhibitionPage = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ExhibitionPageTemplate
        image={getAsset(data.image)}
        title={data.title}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ExhibitionPage.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ExhibitionPage
