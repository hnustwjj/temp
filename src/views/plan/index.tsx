import React, { memo } from "react"
import style from "./style.module.css"
import Form from "./components/Form"
const index = memo(() => {
  return (
    <div className={style.bg}>
      <div className={style.outer}>
        <Form />
      </div>
    </div>
  )
})

export default index
