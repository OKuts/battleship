import {FC, ReactNode} from "react";
import {createPortal} from "react-dom";
import st from './Modal.module.scss'
const modal = document.querySelector('#modal')

interface IChildren {
  children: ReactNode
}

export const Modal: FC<IChildren> = ({children}) =>{
  return modal ? createPortal(<div className={st.modal}>{children}</div>, modal) : null
}


