import './card.css'
import Bar from '../Bar/bar'



const Card = (props)=>{

    const bars = props.arr.map((val)=>{
        return(
            <div>
             <Bar height={val} />
            </div>
        )
    })

    return(
        <div className="algo-card">
            <div className="algo-card-header">
                <h3>{props.heading}</h3>
            </div>
            <div className="bars-container">
            {bars}
            </div>
        </div>
    )
}

export default Card