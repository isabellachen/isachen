import React, { useEffect, useRef, useState, useCallback } from "react"

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

export default function Masonry({ children, gap, minWidth = 500, ...rest }) {
  const ref = useRef()
  const [numCols, setNumCols] = useState(3)
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  // const resizeHandler = () =>
  //   setNumCols(Math.ceil(ref.current.offsetWidth / minWidth))

  const resizeHandler = useCallback(() => {
    setNumCols(Math.ceil(ref.current.offsetWidth / minWidth))
  }, [])

  useEffect(resizeHandler, [])
  useEffect(() => {
    window.addEventListener(`resize`, resizeHandler)

    return () => {
      window.removeEventListener(`resize`, resizeHandler)
    }
  }, [resizeHandler])

  return (
    <div data-uk-lightbox className="masonry" ref={ref} gap={gap} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <div className="masonry-col" key={index} gap={gap}>
          {cols[index]}
        </div>
      ))}
    </div>
  )
}
