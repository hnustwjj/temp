export type Props = {
  setShow: (value: boolean) => void
  isShow: boolean
  type: ModalType
}

export type ModalType = "join" | "create" | "clock" | "get" | "hoster"
