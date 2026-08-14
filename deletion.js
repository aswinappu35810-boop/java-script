let a = [10,10,20,30,10,40]
let element = parseInt(prompt("enter the element u want to Delete: "))
let count = 0
for(i=0;i<a.length; i++)
{
    if(a[i]!=element)
    {
        a[count]=a[i]
        count++
    }

}
<<<<<<< HEAD
a.length = count
=======
a.length =count
>>>>>>> Move-All-Zeros-to-the-End
console.log(a)