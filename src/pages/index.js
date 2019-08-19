import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`signal lantern`, `design`, `development`]} />
    <main className={styles.homeContent}>
      <h2 className={styles.logo}>signal lantern</h2>
      <div className={styles.meat}>
        <h1 className={styles.lede}>
          A design &amp; technology <br /> studio in Atlanta.
        </h1>
        <p>We’re a small team building fun for the web.</p>
      </div>
      <p className={styles.nope}>
        don’t scroll,
        <br />
        there’s nothing
        <br />
        down here
      </p>
    </main>
    <section className={styles.ohHi}>
      <p>😊</p>
    </section>
  </Layout>
)

export default IndexPage
