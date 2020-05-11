import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"

export default ({ location }) => {
  const currentPath = (location && location.pathname) || ""

  return (
    <Headroom pinStart={280}>
      <nav className="nav">
        <ul className="uk-navbar-nav">
          <li className={`${currentPath === "/blog" ? "uk-active" : ""}`}>
            <Link to="/blog">blog</Link>
          </li>
          <li className={`${currentPath === "/portfolio" ? "uk-active" : ""}`}>
            <Link to="/portfolio">portfolio</Link>
          </li>
        </ul>
      </nav>
    </Headroom>
  )
}
