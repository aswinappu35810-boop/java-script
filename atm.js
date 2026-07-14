let wm = parseInt(prompt("enter the money need to with-draw: "))
let fh= Math.floor(wm/500)
alert("500 notes: "+fh)
let remainingf = wm % 500
let th = Math.floor(remainingf/200)
alert("200 notes: "+th)
let remainingt = remainingf % 200
let oh = Math.floor(remainingt/100)
alert("100 notes: "+oh)
let mr = remainingt % 100

alert("And the remaining amount is: ₹"+mr)