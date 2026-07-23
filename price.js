let price = [120, 118, 122, 125, 119, 130, 128]
let deccount = 0
let inccount = 0
let unchanged = 0
let y = 0
for(i=1; i<price.length; i++)
{
    if(price[i-1]<price[i])
    {
        inccount++
    }
    else if( price[i-1]== price[i]){
        unchanged++
    }
    else{
        deccount++
    }

    let x = price[i] - price[i-1]
    if(y<x){
        y=x
    }
    
}

console.log("Decrease: "+deccount)
console.log("Increase: "+inccount) 
console.log("Unchanged: "+unchanged) 
console.log("The biggest change: "+y)
// let x = price[0] - price[1]
// let y = price[1] - price[2]
// let z = price[2] - price[3]
// if(x > y && x > z)
// {
//     alert(x)
// }
// else if(y>x && y>z)
// {
//     alert(y)
// }
// else(
//     alert(z)
// )