let tank = parseInt(prompt("The total capacity of tank: "))
let final = tank * 0.8
let temp = final
// alert("the final water level is: "+final)
final = final - 320
// alert("before the rain added remaining water: "+final)
final = final + 180


let initial = final/0.75
let w = initial*0.25
alert("Tank Capacity"+tank+"\n"+"initial: "+initial.toFixed(2)+"\n"+"wapour: "+w.toFixed(2)+"\n"+"Factory Usage: 180 L"+"\n"+"Rain Water Added: 320 L"+"\n"+"Final water: "+temp)


