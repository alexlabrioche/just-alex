import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/page-container"

function BlogIndex({ data, location }) {
  return (
    <Layout location={location}>
      <SEO title="travaux" />
      <PageContainer>Bientôt</PageContainer>
    </Layout>
  )
}

export default BlogIndex
