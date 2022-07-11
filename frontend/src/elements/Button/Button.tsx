import {FC, memo} from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import st from './Button.module.scss'

type ButtonProps = {
    text: string,
    func?: any[] | null
}

export const Button:FC<ButtonProps> = memo(({text, func = null}) => {
    const dispatch = useAppDispatch()

    const handlerClick = () => {
        if (func) { func.forEach(el => dispatch(el()))}
    }

    return (
        <button
            onClick = {handlerClick}
            className={st.button}>{text}</button>
    )
})
