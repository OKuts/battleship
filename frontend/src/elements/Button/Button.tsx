import {FC} from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { updateField } from '../../store/fieldSlice'
import st from './Button.module.scss'

type ButtonProps = {
    text: string,
    func?: any | null
}

export const Button:FC<ButtonProps> = ({text, func = null}) => {
    const dispatch = useAppDispatch()

    const handlerClick = () => {
        if (func) dispatch(func())
        console.log('click');
    }
    
    return (
        <button 
            onClick = {handlerClick}
            className={st.button}>{text}</button>
    )
}