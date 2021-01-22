


let i = 0;


export const insertionSort = (arr, update)=>{

    
    if(i<arr.length)
    {
    
        let j = i
        let num = arr[i];

        while(j>0 && arr[j-1]>num)
        {   
            arr[j] = arr[j-1]
            j--

        }

        
        arr[j] = num;
        update(arr)
        i++

       

    }

}