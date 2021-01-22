
import { Switch, Route} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import SortingList from './pages/SortingList'
import SelectionSort from './pages/SelectionSort'
import InsertionSort from './pages/InsertionSort'



const Routes = ()=>{
    
        return (
        
                <Switch>
                    <Route exact path={"/"} component={App}/>
                    <Route exact path={"/Home/"} component={Home}/>
                    <Route exact path={"/sortinglist/"} component={SortingList} />
                    <Route exact path={"/selectionsort/"} component={SelectionSort} />
                    <Route exact path={"/insertionsort/"} component={InsertionSort} />
                </Switch>
    
        )
    
}
 
export default Routes