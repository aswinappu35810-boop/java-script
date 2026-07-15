let withdraw = parseInt(prompt("Enter the money needed to withdrw: ₹"))

let note5 = Math.floor(withdraw/500)
let remaining = withdraw % 500
let note2 =Math.floor(remaining/200)
remaining = remaining % 200
let note1 = Math.floor(remaining/100)
remaining = remaining % 100
let note50 = Math.floor(remaining/50)
remaining = remaining % 50
let note10 = Math.floor(remaining/10)
remaining =remaining % 10

alert("The total amount: ₹"+withdraw+"\n"+" total ₹500 note: "+note5+"\n"+" Total no of ₹200notes: "+note2+"\n"+" Total no of ₹100notes"+note1+"\n"+" Total no of ₹50notes: "+note50+"\n"+" Total no of ₹10note: "+note10+"\n"+" The remaining amount ₹: "+remaining)
