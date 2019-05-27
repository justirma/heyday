import React from "react"
import classNames from "classnames/bind"
import styles from "./Button.module.css"

let cx = classNames.bind(styles)

const Button = props => {
  const { text, dark, big } = props
  const buttonStyles = cx({
    button: true,
    buttonDark: dark,
    buttonBig: big,
  })

  return <button className={buttonStyles}>{text}</button>
}

export default Button
