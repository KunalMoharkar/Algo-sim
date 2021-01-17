
import { Switch, Route} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import SortingList from './pages/SortingList'



const Routes = ()=>{
    
        return (
        
                <Switch>
                    <Route exact path={"/"} component={App}/>
                    <Route exact path={"/Home/"} component={Home}/>
                    <Route exact path={"/sortinglist/"} component={SortingList} />
                </Switch>
    
        )
    
}
 
export default Routes