import React from "react"
import { Link } from "gatsby"

export default ({ location }) => {
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
