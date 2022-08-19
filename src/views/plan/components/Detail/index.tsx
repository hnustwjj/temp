import React, { memo } from "react"
import XyButton from "../../../../components/xy-button"
import style from "./style.module.css"
const index = memo(() => {
  const title = "Writing protocol"
  const data = [
    { label: "Starting Day:", value: "Aug 5th" },
    { label: "Total:", value: "21 Days" },
    { label: "Stake:", value: "Aug 5th" },
    { label: "Address:", value: "0x3d...4097" },
    { label: "Member:", value: "20" },
  ]
  return (
    <>
      <div className={style.title}>{title}</div>
      {data.map(item => {
        return (
          <div className={style.line}>
            <div>{item.label}</div>
            <div className={style.content}>{item.value}</div>
          </div>
        )
      })}
      <div className={style.desctitle}>Description</div>
      <div className={style.desc}>
        Writing protocol is a 21 day tracker to help you keep a writing habit.
        Join us! Be a better you and make friends here.
      </div>
      <XyButton className={style.mt}>join</XyButton>
    </>
  )
})
export default index
