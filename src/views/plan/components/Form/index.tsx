import React, { memo, useState } from "react"
import style from "./style.module.css"
import XyButton from "../../../../components/xy-button"
const Select = memo((props: { options: any[] }) => {
  const [value, setValue] = useState()
  const [show, setShow] = useState(false)
  return (
    <div className={style.select} onClick={() => setShow(!show)}>
      {value}
      <div
        className={style.optionsContainer}
        style={{ height: show ? `${props.options.length * 0.3}rem` : "0" }}
      >
        {props.options.map(i => (
          <div className={style.options} onClick={() => setValue(i)}>
            {i}
          </div>
        ))}
      </div>
    </div>
  )
})
const index = memo(() => {
  return (
    <>
      <div className={style.title}>Name</div>
      <div className={style.inputContainer}>
        <input type='text' />
      </div>
      <div className={style.title}>Description</div>
      <div className={style.inputContainer} style={{ height: ".6rem" }}>
        <textarea />
      </div>
      <div className={style.title}>Days（everyday）</div>
      <div className={style.inputContainer}>
        <Select options={[1, 2, 3]} />
      </div>
      <div className={style.title}>Token</div>
      <div className={style.inputContainer}>
        <Select options={[1, 2, 3]} />
      </div>
      <div className={style.title}>Staking amount</div>
      <div className={style.inputContainer}>
        <input type='text' />
      </div>
      <div className={style.title}>Mode</div>
      <div className={style.inputContainer}>
        <Select options={[1, 2, 3]} />
      </div>
      <XyButton className={style["mt-[.53rem]"]}>Confirm</XyButton>
    </>
  )
})

export default index
