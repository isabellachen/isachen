import React from "react"
import Navigation from "src/components/Navigation"
import Header from "src/components/Header"
import Footer from "src/components/Footer"
import Uikit from "uikit"

export default ({ children, location }) => {
  return (
    <div>
      <Header />
      <Navigation location={location} />
      <div className="container mt-5">{children}</div>
      <Footer />
    </div>
  )
}
