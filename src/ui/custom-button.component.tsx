import React from 'react'
import s from './custom-button.module.css'

interface ICustomButtonProps {
    children?: React.ReactNode
    onClick?: () => void
}

const CustomButton = ({children, onClick}: ICustomButtonProps) => {
    return (
        <button className={s.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default CustomButton