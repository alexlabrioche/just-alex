import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSvg = styled.svg`
  cursor: pointer;
`
function ThemeIcon({ size, toggleIcon, setDarkMode, id }) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      onClick={setDarkMode}
      id={id}
    >
      {toggleIcon ? (
        <circle cx="12" cy="12" r="12" />
      ) : (
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
      )}
    </StyledSvg>
  )
}
ThemeIcon.defaultProps = {
  size: 24,
  color: "#000",
  isDark: false,
}

ThemeIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isDark: PropTypes.bool,
}

export default ThemeIcon
