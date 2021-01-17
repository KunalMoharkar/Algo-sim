import {Link} from 'react-router-dom'
import './SortingList.css'

const SortingList = () =>{

    return(
        <div className="list-container container">
            <Link to="/">
                <div className="list-algo-name-card">
                    <span>Bubble Sort</span>
                </div>
            </Link>
            <div className="list-algo-name-card">
                <span>Insertion Sort</span>
            </div>
            <div className="list-algo-name-card">
                <span>Merge Sort</span>
            </div>
            <div className="list-algo-name-card">
                <span>Selection Sort</span>
            </div>
            <div className="list-algo-name-card">
                <span>Quick Sort</span>
            </div>
            <div className="list-algo-name-card">
                <span>Heap Sort</span>
            </div>
        </div>
    )
}

export default SortingList