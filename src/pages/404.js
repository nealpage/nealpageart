import React from 'react'
import Layout from '../components/Layout'
import '../components/main.scss'

const NotFoundPage = () => (
  <Layout>
    <div className="subcontainer">
      <div className="errorcontainer">
        <h1>NOT FOUND</h1>
        <p>This route that does not exist...</p>
        <div><a className="main__a--active" href='/'>Visit Neal Page's Home page</a></div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
