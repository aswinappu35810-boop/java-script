let product = parseInt(prompt("Enter the total no of product: "))
let box = Math.floor(product/24)
let remaining = product % 24

let pallet = Math.floor(box/20)
let ebox = box % 20

let container = Math.floor(pallet/18)
let epallet = pallet % 18

let truck = Math.floor(container/15)
let econtainer = container % 15

let DistCenter = Math.floor(truck/12)
let etruck = truck % 12

let RegWarehouse = Math.floor(DistCenter/10)
let eDistCenter = DistCenter % 10

let ContWarehouse = Math.floor(RegWarehouse/8)
let eRegWarehouse =  RegWarehouse % 8

alert("Country Warehouses (remaining)"+ContWarehouse)
alert("Regional Warehouses (remaining)"+eRegWarehouse)
alert("Distribution centers (remaining)"+eDistCenter)
alert("Trucks (remaining)"+etruck)
alert("Container (remaining)"+econtainer)
alert("Pallets (remaining)"+epallet)
alert("Boxes (remaining)"+ebox)
alert("Product (remaining)"+remaining)




console.log("Country Warehouses (remaining)",ContWarehouse)
console.log("Regional Warehouses (remaining)",eRegWarehouse)
console.log("Distribution centers (remaining)",eDistCenter)
console.log("Trucks (remaining)",etruck)
console.log("Container (remaining)",econtainer)
console.log("Pallets (remaining)",epallet)
console.log("Boxes (remaining)",ebox)
console.log("Product (remaining)",remaining)