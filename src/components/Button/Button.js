import React from "react"
import classNames from "classnames/bind"
import styles from "./Button.module.css"

let cx = classNames.bind(styles)

const Button = props => {
  const { text, dark, big, yellow } = props
  const buttonStyles = cx({
    button: true,
    buttonDark: dark,
    buttonYellow: yellow,
    buttonBig: big,
  })

  return <button className={buttonStyles}>{text}</button>
}

export default Button
