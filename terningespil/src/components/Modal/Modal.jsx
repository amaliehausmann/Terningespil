import { Button } from "../Buttons/Button"
import style from './Modal.module.scss'

export function Modal({modalStyle, title, children, closeModal, buttonName}){

    return(
        <div className={`${style[modalStyle]}`}>
            <h1>{title}</h1>
            {children}
            <Button action={closeModal} buttonStyle='modalButton' buttonTitle={buttonName}></Button>
        </div>
    )
}