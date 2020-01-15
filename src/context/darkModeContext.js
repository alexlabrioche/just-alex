import React from "react"
import GlobalStyle from "../styles"

const LS_ITEM_NAME = "dark-mode"

const DarkModeContext = React.createContext()

function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem(LS_ITEM_NAME, JSON.stringify(!darkMode))
  }

  React.useEffect(() => {
    const lsTheme = JSON.parse(localStorage.getItem(LS_ITEM_NAME))
    if (lsTheme) {
      setDarkMode(lsTheme)
    }
  }, [])
  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      <GlobalStyle dark={darkMode} />

      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeProvider }
export default DarkModeContext
