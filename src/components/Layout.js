import React, { useEffect } from "react"
import Navigation from "src/components/Navigation"
import Header from "src/components/Header"
import Footer from "src/components/Footer"

export default ({ children, location }) => {
  useEffect(() => {
    try {
      this.UIkit = require("uikit/dist/js/uikit")
      this.Icons = require("uikit/dist/js/uikit-icons")
      this.UIkit.use(this.Icons)
    } catch (e) {
      console.error(e)
    }
  })

  return (
    <div>
      <Header />
      <Navigation location={location} />
      <div className="container mt-5">{children}</div>
      <Footer />
    </div>
  )
}
