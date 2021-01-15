import Card from './components/Card/card'
import {useState} from 'react'
import {bubbleSort} from './Algorithms/Sorting/bubbleSort'

function App() {

  const array = [10,20,10,25,9,5,28]
  const [arr, setArr] = useState(array);

  const updateArrayState = (arr)=>{

    bubbleSort(arr);
    setArr([...arr])
  }



  return (

    <div className="container">
      <Card arr={arr}/>
      <button onClick={()=>updateArrayState(arr)}>  update</button>
    </div>

    

  )
}

export default App;
