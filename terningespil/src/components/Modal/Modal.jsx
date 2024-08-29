import { Button } from "../Buttons/Button"
import style from './Modal.module.scss'

export function Modal({modalStyle, title, children, closeModal}){

    return(
        <div className={`${style[modalStyle]}`}>
            <Button action={closeModal} buttonStyle='modalButton' buttonTitle='X'></Button>
            <h1>{title}</h1>
            {children}
        </div>
    )
}