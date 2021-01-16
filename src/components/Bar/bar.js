import './bar.css'


const Bar = (props) =>{

    return(

        <div className="bar" style={{height:props.height*7}}>
            {props.height}
        </div>
    )
}

export default Bar