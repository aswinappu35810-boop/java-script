let a =  [1, 2, 3, 4, 5]
let x = 0
for(i=1;i<a.length;i++)
{
    if(a[i-1]<a[i] && a[i]>a[i+1])
    {
        x=a[i]
        break
    }
}
if(x==0)
    {
        console.log("no peak")    
    }
    else
    {
       console.log("first element that is greater than both of its immediate neighbors: "+x)
    }