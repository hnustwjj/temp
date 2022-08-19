import React, { memo } from "react"
import style from "./style.module.css"
import Form from "./components/Form"
import Detail from "./components/Detail"
const index = memo(() => {
  return (
    <div className={style.bg}>
      <div className={style.outer}>
        {/* <Form /> */}
        {/* <Detail /> */}
      </div>
    </div>
  )
})

export default index
