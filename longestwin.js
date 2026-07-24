let array=[1,1,0,1,1,1,0,1,1,1,0,1,1]
let total = 0
let count = 0 
let x= 0
let y=0
let win=0
for(i=0; i<array.length; i++)
{
    if(array[i]==1)
        {
            count=count+1
            total=count
        }
        else
            {
                count=0
                // console.log(array[i])
            }
            
            if (y<total)
                {
                    y=total
                }
}


console.log(x)
// console.log(win)