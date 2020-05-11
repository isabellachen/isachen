export default () => {
  if (typeof window !== "undefined") {
    window.location = "/blog"
  }

  return null
}
