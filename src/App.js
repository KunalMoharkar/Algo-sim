import Card from './components/Card/card'
import Button from './components/Button/button'
import {useState} from 'react'
import {bubbleSort} from './Algorithms/Sorting/bubbleSort'
import './App.css'
import { isSorted } from './Algorithms/isSorted'

const App = ()=>{

  const array = [10,20,10,25,45,9,5,28]
  const [arr, setArr] = useState(array)
  const [sorted, setSorted] = useState(false)

  const update = (arr)=>{
    setArr([...arr])
  }

  const step = (arr)=>{

    bubbleSort(arr, update)
    
    if(isSorted(arr))
    {
      setSorted(true)
    }

  }

  const start = (arr)=>{

    setInterval(
      () => bubbleSort(arr, update), 
      300
    )
  }

  
  return (

    <div className="container">
      <div className="algo-container">
        <Card arr={arr} heading="Bubble Sort"/>
        <div className="control-panel">
        <Button handler={()=>start(arr)} text="Start"/>
        <Button handler={()=>step(arr)} text="Step"/>
        <Button handler={()=>window.location.reload()} text="Reset"/>

        {sorted?<p>Sorted</p>:null}
        </div>
      </div>
    </div>

    

  )
}

export default App;
