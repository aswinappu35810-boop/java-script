

let a=[1,2,3,4,5]
let element = parseInt(prompt("entert the element to enter: "))
let position = parseInt(prompt("enter the position: "))
let next = 0
for(i=position;i<a.length+1;i++)
{
next=a[i]
a[i]=element
element = next

}
console.log(a);
