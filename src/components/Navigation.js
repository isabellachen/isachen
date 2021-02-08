import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"

export default ({ location }) => {
  const [pinStart, setPinStart] = useState(50)

  const currentPath = (location && location.pathname) || ""

  // useEffect(() => {
  //   try {
  //     if (window.innerWidth >= 1366) {
  //       setPinStart(270)
  //     }
  //   } catch (e) {
  //     console.error(e)
  //   }
  // })

  return (
    // <Headroom pinStart={pinStart}>
    <nav className="nav">
      <ul className="nav-inner uk-navbar-nav">
        <li className={`${currentPath === "/" ? "uk-active" : ""}`}>
          <Link to="/">home</Link>
        </li>
        <li className={`${currentPath === "/resume" ? "uk-active" : ""}`}>
          <Link to="/resume">resume</Link>
        </li>
        <li className={`${currentPath === "/portfolio" ? "uk-active" : ""}`}>
          <Link to="/portfolio">portfolio</Link>
        </li>
      </ul>
    </nav>
    // </Headroom>
  )
}
