let a = [9,7,5,3,1]
let odd = 0
let found = false

let bigg = 1
for(i=0; i<a.length; i++)
{

    if(a[i]%2==0)
    {
        // console.log("no odd number is present");
        found = false
        // console.log(a[i])
    }
    else
    {
        odd = a[i]
        found = true
        // console.log(odd)
    }

    if(bigg<odd)
    {
        bigg = odd
    }
    // else if(odd<bigg)
    // {
    //     bigg = odd
    // }
}
if(!found)
{
 console.log("no odd number is present");   
}
// if(bigg<0)
// {
//     console.log("enter the biggest odd number: "+bigg) 

// }
else
{
    console.log("enter the biggest odd number: "+bigg) 
}