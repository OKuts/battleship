import {FC} from "react";
import st from "./Message.module.scss";

interface IModalProps {
  text: string
}

export const Message: FC<IModalProps> = ({text}) =>
  <div className={st.text}>{text}</div>

