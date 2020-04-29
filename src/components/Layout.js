import React from "react"
import Header from "src/components/Header"
import { Link } from "gatsby"
import Uikit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"

Uikit.use(Icons)

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
  return (
    <div>
      <Header />
      <Navigation location={location} />
      <div className="container mt-5">{children}</div>
    </div>
  )
}
