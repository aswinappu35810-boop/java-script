let a= [29,10,14,37,13]
let found = false
let small = 0
let x = 0
for(i=0; i<a.length; i++)
{
   if(!found)
    {
        small = a[i]
        found = true
    } 
    // else if(a[i]<small)
    // {
    //     small = a[i]
    // }
    for(j=0; j<a.length; j++)
    {
       if(a[j]<small)
       {
        
        small = a[j]
        a[j]=a[i]
        a[i]=small
        found = false
       }
    }

}


console.log(a)