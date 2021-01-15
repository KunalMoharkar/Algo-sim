import Card from './components/Card/card'
import Button from './components/Button/button'
import {useState} from 'react'
import {bubbleSort} from './Algorithms/Sorting/bubbleSort'

function App() {

  const array = [10,20,10,25,9,5,28]
  const [arr, setArr] = useState(array);

  const update = (arr)=>{
    setArr([...arr])
  }

  const start = (arr)=>{

    setInterval(
      () => bubbleSort(arr, update), 
      300
    )

  }

  return (

    <div className="container">
      <Card arr={arr} heading="Bubble Sort"/>
      <Button handler={()=>start(arr)} text="Start"/>
    </div>

    

  )
}

export default App;
