import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import useInterval from "../hooks/useinterval"
import styled from "styled-components"
import Link from "gatsby-link"

const BioWrapper = styled.div`
  * {
    margin-bottom: 1rem;
  }
  h1 {
    margin-bottom: 3rem;
    font-size: ${({ theme }) => theme.fontSize.xxxxl};
  }
  .bio-subtitle {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  @media screen and (min-width: ${({ theme }) => theme.screens.md}) {
    h1  {
      margin-bottom: 6rem;
      font-size: ${({ theme }) => theme.fontSize.xxxxxxl};
    }
    .bio-subtitle {
      flex-direction: row;
    }
  }
`

const Bio = () => {
  const data = useStaticQuery(BIO_QUERY)
  const { author } = data.site.siteMetadata
  const [helloCounter, setHelloCounter] = React.useState(0)
  useInterval(() => {
    sayHello.length > helloCounter + 1
      ? setHelloCounter(helloCounter + 1)
      : setHelloCounter(0)
  }, 2500)
  const sayHello = [
    "Hello",
    "Namasté",
    "Selamat pagi",
    "Kónnichi wa",
    "Bonjour",
  ]

  return (
    <BioWrapper>
      <h1>{sayHello[helloCounter]}, </h1>
      <div className="bio-subtitle">
        <p>
          Je m'appel {author}, oui juste {author}.&nbsp;
        </p>
      </div>
      <p>
        Je suis <Link to="/me">développeur web</Link>. Je publie ici quelques{" "}
        <Link to="/work">projets personnels</Link>.
        {/* Tu peux aussi aller faire un tour
        sur mon{" "}
        <ExternalLink to={`https://github.com/${social.github}`}>
          Github.
        </ExternalLink> */}
      </p>
    </BioWrapper>
  )
}
const BIO_QUERY = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author
        social {
          github
        }
      }
    }
  }
`

export default Bio
