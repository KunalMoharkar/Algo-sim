
import backgroundImage from '../images/img_home.png'
import './Home.css'

const Home = ()=>{

    return(
        <div className="home-container">
            <div className="image-container">
                <img src={backgroundImage} />
            </div>
            <div className="category-container container">
                <div className="category-card">
                    <h3>Sorting</h3>
                </div>
                <div className="category-card">
                    <h3>Graphs</h3>
                </div>
            </div>
        </div>
    )
}

export default Home