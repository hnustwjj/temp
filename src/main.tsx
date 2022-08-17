import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

export const rem = (pxWidth = 375, pxHeight = 812) => {
  const html: HTMLHtmlElement = document.querySelectorAll("html")[0]

  const oWidth =
    window.innerWidth ||
    document.body.clientWidth ||
    document.documentElement.clientWidth
  const oHeight =
    window.innerHeight ||
    document.body.clientHeight ||
    document.documentElement.clientHeight
  if (oWidth < oHeight) {
    html.style.fontSize = `${(oWidth / pxWidth) * 100}px`
  } else {
    html.style.fontSize = `${(oWidth / pxHeight) * 100}px`
  }
}
rem()
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
)
