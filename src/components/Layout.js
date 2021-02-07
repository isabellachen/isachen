import React, { useEffect } from "react"
import Navigation from "src/components/Navigation"
import Footer from "src/components/Footer"
import Header from "src/components/Header"

export default ({ children, location }) => {
  useEffect(() => {
    try {
      const UIkit = require("uikit/dist/js/uikit")
      const Icons = require("uikit/dist/js/uikit-icons")
      UIkit.use(Icons)
    } catch (e) {
      console.error(e)
    }
  })

  return (
    <div className="layout_container">
      <Header />
      <Navigation location={location} />
      <div className="container mt-5 main_content">{children}</div>
      <Footer />
    </div>
  )
}
