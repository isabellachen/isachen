import React from "react"
import Header from "src/components/Header"
import { Link } from "gatsby"

export default ({ children }) => {
  return (
    <div className="container mt-5">
      <Link to="/blog">blog</Link>
      <Link to="/portfolio">portfolio</Link>
      <Header />
      {children}
    </div>
  )
}
