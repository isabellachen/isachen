import React from "react"

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

export default function Masonry({ children, gap, minWidth = 500, ...rest }) {
  const numCols = 3
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  return (
    <div data-uk-lightbox className="masonry-columns" {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <div className="masonry-item" key={index} gap={gap}>
          {cols[index]}
        </div>
      ))}
    </div>
  )
}
