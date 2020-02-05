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
          github
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
        <h5>
          Les choses sérieuses sont sur{" "}
          <ExternalLink to={`https://www.linkedin.com/in/${social.linkedIn}/`}>
            LinkedIn
          </ExternalLink>
          , le reste est sur{" "}
          <ExternalLink to={`https://github.com/${social.github}`}>
            Github
          </ExternalLink>
          . 🥳
        </h5>
      </PageContainer>
    </Layout>
  )
}
export default Me
