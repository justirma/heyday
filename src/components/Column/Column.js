import React from "react"
import classNames from "classnames/bind"
import styles from "./Column.module.css"

let cx = classNames.bind(styles)

const Column = props => {
  const { yellow } = props
  const columnStyles = cx({
    column: true,
    columnYellow: yellow,
  })

  return <div className={columnStyles}>{props.children}</div>
}

export default Column
