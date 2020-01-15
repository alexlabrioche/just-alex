import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/page-container"

function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="404" />
      <PageContainer>
        <h1>Perdu ?</h1>
        <p>
          <Link>retour à la maison</Link>
        </p>
      </PageContainer>
    </Layout>
  )
}

export default NotFoundPage
