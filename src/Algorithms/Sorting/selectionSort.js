

let i = 0;

export const selectionSort = (arr, update)=>{



        if(i<arr.length)
        {

            let min = arr[i];
            let minpos = i;

            for(let j=i;j<arr.length;j++)
            {
                if(min > arr[j])
                {
                    min = arr[j];
                    minpos = j;
                }
            }

            let temp = arr[i];
            arr[i] = min;
            arr[minpos] = temp;

            update(arr)

            i++;

        }

}