import './button.css'

const Button = (props)=>{

    return(
        <button onClick={props.handler} className="btn-hover">
            {props.text}
        </button>
    )

}


export default Button