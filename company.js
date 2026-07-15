let Tr = parseInt(prompt("Enter the total revenue: "))
let emp = Math.floor(Tr * 0.28)
let br = Tr - emp
alert("The salary of employee: ₹"+emp)
alert("remaining balance after Employee deduction: ₹"+br)
let market = Math.floor(br * 0.12)
br = br - market
alert(" The marketing price of company: ₹"+market)
alert("remaining balance after Marketing deduction: ₹"+br)
let office =Math.floor( br * 0.07)
br = br -office
alert("The office rent of the company: ₹"+office)
alert("remaining balance after Office rent deduction: ₹"+br)
let government = Math.floor(br * 0.18)
br = br - government
alert("The government taxt of the company: ₹"+government)
alert("remaining balance after Government tax deduction: ₹"+br)
let company = Math.floor(br * 0.10)
br = br - company
alert("The Company saving after dection from tax: ₹"+company)
alert("remaining balnce of company saving deduction: ₹"+br)

let Te = Tr - br
alert("The company balance is: ₹"+br+"\n"+" The Total expance of the company: ₹"+Te+"\n"+"The total revenue: ₹"+Tr)