let terms = parseInt(prompt("how many times want to generate: "))
let y =  1
let x =  0
let num

if(terms>=0){
console.log(x);
console.log(y);

for(let i=1; i<=terms; i++)
    {        
        num = x + y
        x=y
        y = num

        console.log(num)

    }
    
}
else
{
    console.log("negative value are not allowed");
}
 

