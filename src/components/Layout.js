import React, { useEffect, useState } from "react"
import Header from "src/components/Header"
import { Link } from "gatsby"

const Navigation = ({ location }) => {
  const [currentPath, updateCurrentPath] = useState(
    (location && location.pathname) || ""
  )

  return (
    <nav
      className="uk-navbar-container"
      data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
      data-uk-navbar
    >
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li className={`${currentPath === "/blog" ? "uk-active" : ""}`}>
            <Link to="/blog">blog</Link>
          </li>
          <li className={`${currentPath === "/portfolio" ? "uk-active" : ""}`}>
            <Link to="/portfolio">portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ({ children, location }) => {
  const [ready, updateReady] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const uikit = require("uikit")
      const icons = require("uikit/dist/js/uikit-icons.min")
      uikit.use(icons)
      updateReady(true)
    }
  }, [])

  return (
    <div>
      {ready && (
        <>
          <Navigation location={location} />
          <div className="container">
            <Header />
            {children}
          </div>
        </>
      )}
    </div>
  )
}
