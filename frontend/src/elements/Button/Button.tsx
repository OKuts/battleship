import {FC, memo} from 'react'
import st from './Button.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'


type ButtonProps = {
    text: string,
    func?: any[] | null
}

export const Button:FC<ButtonProps> = memo(({text, func = null}) => {
    const dispatch = useAppDispatch()

    const handlerClick = () => {
        console.log('update');

        if (func) { func.forEach(el => dispatch(el()))}
    }

    return (
        <button
            onClick = {handlerClick}
            className={st.button}>{text}</button>
    )
})
