import {FC} from "react";
import {createPortal} from "react-dom";
import st from './Modal.module.scss'
import {useAppSelector} from "../../hooks/useAppDispatch";

const modal = document.querySelector('#modal')

interface IModalProps {
  text: string
}

const Element: FC<IModalProps> = ({text}) => <div className={st.modal}>
  <div>{text}</div>
</div>


export const Modal: FC = () =>{
  const { isMouseLeftPress } = useAppSelector(state => state.flot)
  const text = isMouseLeftPress ? 'Hello' : 'Bye'
  return modal ? createPortal(<Element text={text}/>, modal) : null
}


