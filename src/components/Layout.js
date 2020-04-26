import React, { useEffect, useState } from "react"
import Header from "src/components/Header"
import { Link } from "gatsby"

const Navigation = ({ location }) => {
  const currentPath = (location && location.pathname) || ""

  return (
    <nav
      className="uk-navbar-container"
      data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom"
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
      // const UIkit = require("uikit")
      const UIkit = require("uikit/dist/js/uikit-core")
      const Parallax = require("uikit/dist/js/components/parallax")
      const icons = require("uikit/dist/js/uikit-icons.min")
      UIkit.use(icons)
      UIkit.component("parallax", Parallax)
      updateReady(true)
      window.uikit = UIkit
    }
  }, [])

  return (
    <div>
      {ready && (
        <>
          <Header />
          <Navigation location={location} />
          <div className="container">{children}</div>
        </>
      )}
    </div>
  )
}
