// let a=10
// let b=20
// let temp=a
// a=b,b=temp
// console.log("the value a: ",a," the value of b: ",b)


// let name=prompt("enter your Name: ")
// let Age=parseInt(prompt("enter your Age: "))
// let Email=prompt("enter your Mail: ")

// console.log("Name: ",name,"Age: ",Age,"Your mail is: ",Email)


// let a=parseInt(prompt("enter the first number: "))
// let b=parseInt(prompt("enter the Second number: "))
// let add =a+b // add
// let sub =a-b //subtract
// let mul =a*b //multiply
// let div =a/b //devison
//  console.log("the addition is: ",add)
//  console.log("the subtraction is: ",sub)
//  console.log("the multiplication is: ",mul)
//  console.log("the divison is: ",parseFloat(div))


let a= parseInt(prompt("enter the value a: "))
let b= parseInt(prompt("enter the value b: "))
let c= parseInt(prompt("enter the value c: "))
let temp=a

console.log("the value of a: ",a,"the valu of b: ",b,"the value of c: ",c)
a=c
c=b
b=temp

alert("the value of a: "+a)
alert("the value of b: "+b)
alert("the value of c: "+c)