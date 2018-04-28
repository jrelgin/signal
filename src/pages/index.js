import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 className="wave"> 👋 </h1>
    <p>New site</p>
    <p >Comin at ya</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
