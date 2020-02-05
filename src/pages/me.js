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

        <p>
          <br />
          <b>En bref : </b>29 ans développeur React, GraphQL, Node et adepte de
          la philosophie{" "}
          <a
            href="https://manifesto.softwarecraftsmanship.org/#/fr-fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Software Craftmanship
          </a>
          .
          <br />
          Après 5 mois passés à apprendre les fondamentaux du web et les
          principes de création d'applis web et mobile chez{" "}
          <a
            href="https://www.konexio.eu/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Konexio
          </a>
          . Je trouve un stage dans une{" "}
          <a
            href="https://www.oyez.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            agence
          </a>{" "}
          spécialisée dans la transformation numérique des commerces. Du debug à
          la création d'un microservice mentoré par différents Tech-Lead
          j'appréhende la vie en entreprise{" "}
          <a
            href="https://fr.wikipedia.org/wiki/Manifeste_agile"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Agile
          </a>
          .
          <br />
          Je décide après cette expérience, de retourner en cours chez{" "}
          <a
            href="https://simplon.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simplon
          </a>{" "}
          pour approfondir mes connaissances.
          <br />
          <h6 style={{ fontWeight: "400", fontStyle: "normal" }}>
            Je suis actuellement à la recherche de nouvelles opportunités
            professionnelles.
          </h6>
        </p>
      </PageContainer>
    </Layout>
  )
}
export default Me
