import React from "react"

export default () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="footer">
      <div className="container">
        <div>Isa Chen © {currentYear}</div>
      </div>
    </div>
  )
}
