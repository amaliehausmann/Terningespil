import { Button } from "../Buttons/Button"
import style from './Modal.module.scss'

export function Modal({title, children, closeModal}){

    return(
        <div className={style.modalStyling}>
            <Button action={closeModal} buttonStyle='modalButton' buttonTitle='X'></Button>
            <h1>{title}</h1>
            {children}
        </div>
    )
}