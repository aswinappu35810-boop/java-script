let product = parseInt(prompt("Enter the no of the product: "))
let boxes = Math.floor(product / 24)
let remaining = product % 24
let container = Math.floor(boxes / 15)
let ebox = boxes % 15

alert("The no of container: "+container)
alert("The no of Extra boxes: "+ebox)
alert("The no of remaining boxes: "+remaining)