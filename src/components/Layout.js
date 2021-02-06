import React, { useEffect } from "react"
import Navigation from "src/components/Navigation"
import Header from "src/components/Header"
import Footer from "src/components/Footer"

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
    <div class="layout_container">
      <Header />
      <Navigation location={location} />
      <div className="container mt-5 main_content">{children}</div>
      <Footer />
    </div>
  )
}
