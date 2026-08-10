

let a=[1,2,3,4,5]
let element = parseInt(prompt("entert the element to enter: "))
let position = parseInt(prompt("enter the position: "))
let next = 0
for(i=a.length; i>=position; i--)
{ 
a[i]=a[i-1]
if(i==position)
{
    a[i] = element
}

}
console.log(a);