import style from './Higher.module.scss';
const Button = (props) => {
    return (
        <>
        <div className='AllButts'>
        <button onClick={() => props.onClick} className={props.style}>
            {props.higher}
        </button>
        
        </div>
        </>
    )
} 
export default Button;