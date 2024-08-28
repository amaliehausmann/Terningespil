import { Button } from "../Buttons/Button"

export function Modal({title, children, closeModal}){

    return(
        <div>
            <Button action={closeModal} buttonStyle='modalButton' buttonTitle='X'></Button>
            <h1>{title}</h1>
            {children}
        </div>
    )
}