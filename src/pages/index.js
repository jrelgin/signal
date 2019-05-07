import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`signal lantern`, `design`, `development`]} />
    <main className="home-content">
      <h2 className="logo">signal lantern</h2>
      <div className="meat">
        <h1 className="lede">A design &amp; technology <br/> studio in Atlanta.</h1>
        <p>We’re a small team that focuses on experimental web solutions. If you
          have an interesting problem or brand, we might be the right team for you. </p>
      </div>
      <p className="nope">don’t scroll,<br/>there’s nothing<br/>down here</p>
    </main>
    <section className="oh-hi">
      <span role="img" aria-labelledby="smile emoji">😊</span>
    </section>
  </Layout>
)

export default IndexPage
