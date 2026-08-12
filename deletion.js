let a = [10,10,20,30,10,40]
let element = parseInt(prompt("enter the element u want to Delete: "))
let count = 0
for(i=0;i<a.length; i++)
{
    if(a[i]!=element)
    {
        count++
        a[count]=a[i]
    }

}
a.length = a.length-count
console.log(a)