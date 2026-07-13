let piza=parseInt(prompt("enter the total no piza: "))
let friends=parseInt(prompt("NO OF FRIENDS TWO SHARE: "))
let total = piza * 8
let spf = total / friends
let fg = friends * Math.floor(spf)
let remaining = total - fg



alert("Total no of slices: "+total)
alert("Number of slices each friends get: "+Math.floor(spf))
alert("Remaing slices: "+remaining)


