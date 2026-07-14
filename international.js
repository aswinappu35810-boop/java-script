let product = parseInt(prompt("Enter the no of product: "))
let boxes = Math.floor(product/24)
let remaining = product % 24
let pallet = Math.floor(boxes/18)
let ebox = boxes % 18
let container = Math.floor(pallet/12)
let epallet = pallet % 12
let econtainer = container % 8
let ship = Math.floor(container/8)

alert("THe no of ship: "+ship)
alert("The no of Extra container: "+econtainer)
alert("The no of Extra pallet: "+epallet)
alert("The no of Extra boses: "+ebox)
alert("The no of Extra remaining: "+remaining)

