let southf = parseInt(prompt("Enter the final stock available in south relief center.: "))

// southf = southf + 2000
temp = southf+2000
temp = temp/0.88
let x = (Math.floor(temp) - 1461)/3.1999
// alert(x)

let north = x
let east = 2*x + 1800
let west = 2*x + 600
let south = 2.5*x + 1200

let transfer1 = x*0.22
let rnorth = x*0.78
let reast = east + transfer1


let transfer2 = reast*0.15
reast = reast * 0.85
let rwest = west + transfer2


let transfer3 = rwest*0.3
rwest = rwest * 0.7
let rsouth= south + transfer3
let ls = rsouth * 0.12
rsouth = rsouth -ls


let emergencynorth = 1350
rnorth = rnorth + emergencynorth
let le = 650
reast = reast - le
let transfer5 = rnorth*0.25 
rwest = transfer5 + rwest
rnorth = rnorth*0.75
let transfer4 = 2000
rsouth = rsouth-transfer4
rnorth = rnorth + transfer4
let lw = 0.08*rwest
rwest = rwest - lw
let tistock = north+south+west+east
let tfstock = rnorth+rsouth+rwest+reast
let tulost = lw + ls + le
let ttransfer = transfer1+transfer2+transfer3+transfer4+transfer5
alert("Initial North: "+north.toFixed(2)+"\n"+"Initial East: "+east.toFixed(2)+"\n"+"Initial West: "+west.toFixed(2)+"\n"+"Initial South: "+south.toFixed(2))
alert("Transfer North → East: "+transfer1.toFixed(2)+"\n"+"Transfer East → West: "+transfer2.toFixed(2)+"\n"+"Transfer West → South: "+transfer3.toFixed(2)+"\n"+"Transfer South → North: "+transfer4.toFixed(2)+"\n"+"Emergency Stock to North: "+emergencynorth.toFixed(2))
alert("Loss at South: "+ls.toFixed(2)+"\n"+"Loss at East: "+le.toFixed(2)+"\n"+"Loss at West: "+lw.toFixed(2))
alert("remaining south: "+rsouth)
alert("Total Initial Stock: "+tistock.toFixed(2)+"\n"+"Total Final Stock: "+tfstock.toFixed(2)+"\n"+"Total Units Lost : "+tulost.toFixed(2)+"\n"+"Total Units Transferred  : "+ttransfer.toFixed(2))


