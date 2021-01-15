import './card.css'
import Bar from '../Bar/bar'

const Card = (props)=>{

    const bars = props.arr.map((val)=>{
        return(
            <div>
             <Bar height={val*10} />
            </div>
        )
    })

    return(
        <div className="algo-card">
            {bars}
        </div>
    )
}

export default Card