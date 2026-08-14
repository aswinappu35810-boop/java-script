let a = [0, 5, 0, 3, 2, 0, 8]
// let temp = 0
let j = 0
let count = 0
for(i=0;i<a.length;i++)
{
    if(a[i]!=0)
    {
     count = a[j]
     a[j]=a[i]
     j++
     a[i]=count
    }
    

}
console.log(a)