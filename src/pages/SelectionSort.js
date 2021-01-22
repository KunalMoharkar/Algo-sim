import Card from '../components/Card/card'
import Button from '../components/Button/button'
import {useState} from 'react'
import {selectionSort} from '../Algorithms/Sorting/selectionSort'
import '../App.css'
import { isSorted } from '../Algorithms/isSorted'

const SelectionSort = ()=>{

  const array = [10,20,10,25,45,9,5,28]
  const [arr, setArr] = useState(array)
  const [sorted, setSorted] = useState(false)

  const update = (arr)=>{
    setArr([...arr])
  }

  const step = (arr)=>{

    selectionSort(arr, update)
    
    if(isSorted(arr))
    {
      setSorted(true)
    }

  }

  const start = (arr)=>{

    setInterval(
      () => selectionSort(arr, update), 
      300
    )
  }

  
  return (

    <div className="container">
      <div className="algo-container">
        <Card arr={arr} heading="Selection Sort"/>
        <div className="control-panel">
        <Button handler={()=>start(arr)} text="Start"/>
        <Button handler={()=>step(arr)} text="Step"/>
        <Button handler={()=>window.location.reload()} text="Reset"/>
        
        </div>
        {sorted?<p className="sorted-tag">Sorted</p>:null}
      </div>
    </div>

    

  )
}

export default SelectionSort;
