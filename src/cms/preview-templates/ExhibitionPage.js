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
        exhibition1={data.exhibition1 || {}}
        ex1_img1={getAsset(data.ex1_img1)}
        ex1_img2={getAsset(data.ex1_img2)}
        ex1_img3={getAsset(data.ex1_img3)}
        ex1_img4={getAsset(data.ex1_img4)}
        ex1_img5={getAsset(data.ex1_img5)}
        exhibition2={data.exhibition2 || {}}
        ex2_img1={getAsset(data.ex2_img1)}
        ex2_img2={getAsset(data.ex2_img2)}
        ex2_img3={getAsset(data.ex2_img3)}
        ex2_img4={getAsset(data.ex2_img4)}
        ex2_img5={getAsset(data.ex2_img5)}
        exhibition3={data.exhibition3 || {}}
        ex3_img1={getAsset(data.ex3_img1)}
        ex3_img2={getAsset(data.ex3_img2)}
        ex3_img3={getAsset(data.ex3_img3)}
        ex3_img4={getAsset(data.ex3_img4)}
        ex3_img5={getAsset(data.ex3_img5)}
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
