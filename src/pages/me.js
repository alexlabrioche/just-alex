import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExternalLink from "../components/external-link"
import PageContainer from "../components/page-container"

const ME_PAGE_QUERY = graphql`
  query MePageQuery {
    site {
      siteMetadata {
        social {
          linkedIn
        }
      }
    }
  }
`
function Me({ location }) {
  const data = useStaticQuery(ME_PAGE_QUERY)
  const { social } = data.site.siteMetadata
  return (
    <Layout location={location}>
      <SEO title="moi" />
      <PageContainer>
        <p>
          Plus d'infos sur{" "}
          <ExternalLink to={`https://www.linkedin.com/in/${social.linkedIn}/`}>
            LinkedIn
          </ExternalLink>{" "}
        </p>
      </PageContainer>
    </Layout>
  )
}
export default Me
