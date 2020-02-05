import React from "react"
import ThemeIcon from "../themeIcon"
import DarkModeContext from "../../context/darkModeContext"
import Link from "gatsby-link"
import AppLogo from "../app-logo"
import NavigationWrapper from "./appbar-wrapper"

function Navigation() {
  const { darkMode, toggleDarkMode } = React.useContext(DarkModeContext)
  return (
    <NavigationWrapper>
      <div className="nav-app-icon nav-item-container">
        <Link to="/">
          <AppLogo size={40} id="nav-app-logo" />
        </Link>
      </div>
      <div className="nav-links nav-item-container">
        <>
          <Link to="/me">Moi ?</Link>
          <Link to="/work">Projets</Link>
          {/* <Link to="/thoughts">Pensées</Link> */}
        </>
        <ThemeIcon
          size={30}
          id="nav-theme-icon"
          toggleIcon={darkMode}
          setDarkMode={toggleDarkMode}
        />
      </div>
    </NavigationWrapper>
  )
}

export default Navigation
