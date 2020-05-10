import "src/styles/app.scss"

export default () => {
  if (typeof window !== "undefined") {
    window.location = "/blog"
  }

  return null
}
