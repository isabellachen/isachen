import React from "react"
import Header from "src/components/Header"

export default ({ children }) => {
  return (
    <div className="container mt-5">
      <Header />
      {children}
    </div>
  )
}
