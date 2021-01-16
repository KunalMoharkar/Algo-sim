
import { Switch, Route} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'



const Routes = ()=>{
    
        return (
        
                <Switch>
                    <Route exact path={"/"} component={App}/>
                    <Route exact path={"/Home/"} component={Home}/>
                </Switch>
    
        )
    
}
 
export default Routes