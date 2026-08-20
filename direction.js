

function getCount(a){
    let count = 0
    let found = 0
    if(a[0]<a[1])
        {
            found = 1
        }
    else
    {
        found = -1
    }
    for(i=1; i<a.length; i++)
    {

        if(a[i]>a[i-1])
        {
            if(found===-1)
            {
                count++
                found=1
            }
        }
        else if(a[i]<a[i-1])
            if(found===1)
            {
                count++
                found=-1
            }
    }
    
    return count
}
let arr = [4, 4, 5, 2, 1]
console.log(getCount(arr));
