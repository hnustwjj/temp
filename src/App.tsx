import { useState } from "react"
import Modal from "./components/Modal"
import { Button } from "antd"
import type { ModalType } from "./components/Modal/type"

import Plan from "./views/plan/index"
function App() {
  const [show, setShow] = useState(false)
  const [type, setType] = useState<ModalType>("create")
  const click = (type: ModalType) => {
    setShow(!show)
    setType(type)
  }
  return (
    <>
      {/* <Plan /> */}
      <Button onClick={() => click("create")}>创建成功</Button>
      <Button onClick={() => click("join")}>加入成功</Button>
      <Button onClick={() => click("clock")}>打卡成功</Button>
      <Button onClick={() => click("get")}>获得NTF</Button>
      <Button onClick={() => click("hoster")}>hoster筛选</Button>
      <Modal isShow={show} setShow={setShow} type={type} />
    </>
  )
}

export default App
