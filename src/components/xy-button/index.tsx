import "./index.css"
import classNames from "classnames"
import * as React from "react"
interface IButton {
  className?: any
  children?: React.ReactNode
}

function XyButton(props: IButton) {
  const classes = classNames("xy-button", props.className)
  return <div className={classes}>{props.children}</div>
}

export default XyButton
