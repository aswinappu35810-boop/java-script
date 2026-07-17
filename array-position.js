let names =["aswin","anas","shifas"]
console.log("the array before elemnts: ",names)

let deletecount =parseInt(prompt("enter count to remove elements: "))
let postion =parseInt(prompt("enter the postion u need to add: "))
let name =prompt("Enter the name u want to add: ")

names.splice(postion, deletecount, name)

console.log("The array after added element",names)