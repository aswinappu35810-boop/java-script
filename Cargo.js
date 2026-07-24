let weight = [250, 180, 400, 120, 300, 150]
let total = 0 
let capacity = 1000
let collected = []
let remainingbox = 0

for(i=0; i<weight.length;i++)
{
    if(total+weight[i]<=capacity)
    {
        total = total+ weight[i]
        collected.push(weight[i])
        
    }
    else
    {
        remainingbox=weight[i]
        break
    }
}
let rem = weight.length-collected.length
console.log("Loaded Boxes: "+collected)
console.log("Total weigth: "+total)
console.log("Boxes Loaded: "+collected.length)
console.log("Remaining Boxes: "+rem)


if (rem>0)
{
    console.log("Next Box ("+remainingbox+" kg) cannot be loaded because it exceeds the truck capacity.")
}
else{
    console.log("no remaining box")
}