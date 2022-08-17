import React, { memo, useRef, useEffect, ReactElement } from "react"
import { createPortal } from "react-dom"
import style from "./style.module.css"
import XyButton from "../xy-button"
import type { Props, ModalType } from "./type"
import bg from "../../assets/createPlane/achievement.png"
import bg2 from "../../assets/createPlane/illustration.png"

const Portal: React.FC<{ children: ReactElement }> = ({ children }) => {
  // 创建一个 container 节点，作为 portal 的容器节点
  const containerRef = useRef<HTMLDivElement | null>(null)

  if (!containerRef.current) {
    console.log(containerRef.current)
    containerRef.current = document.createElement("div")
    // 将 container 节点添加到 document.body
    document.body.appendChild(containerRef.current)
  }

  // 当组件销毁时，移除 container 节点
  useEffect(() => {
    return function cleanup() {
      if (containerRef.current) {
        document.body.removeChild(containerRef.current)
      }
    }
  }, [])

  return createPortal(children, containerRef.current)
}

const descData: Record<ModalType, string> = {
  join: "You have sighed up the program successfully!",
  create: "You have created the program successfully!",
  clock: "Well done!",
  get: "You have gained NFT of this achievement!",
  hoster: "You have selected your members successfully!",
}

const index = memo((props: Props) => {
  const { isShow, setShow, type } = props

  const data = {
    title: "Bravo!",
    desc: descData[type],
    Trx: "0x1249387490495845",
    Gas: "0.01  MATIC",
  }

  const { title, desc, Trx, Gas } = data
  return isShow ? (
    <Portal>
      <div className={style.cover} onClick={() => setShow(!isShow)}>
        <div className={style.container}>
          <div className={style.flex}>
            <img
              src={type === "get" ? bg : bg2}
              className={style.itemImg}
              alt=''
            />
            <div className={style.desc}>
              <p>{title}</p>
              <p>{desc}</p>
            </div>
            <div className={style.line} />
            <div className={style.detail}>
              <div className={style.detailItem}>
                <div className={style.label}>Trx</div>
                <div>{Trx}</div>
              </div>
              <div className={style.detailItem}>
                <div className={style.label}>Gas</div>
                <div>{Gas}</div>
              </div>
            </div>
            <XyButton className={style.button}>Yay!</XyButton>
          </div>
        </div>
      </div>
    </Portal>
  ) : null
})

export default index
