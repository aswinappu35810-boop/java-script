let numbers=[]

let length = parseInt(prompt("entert the lenght of array: "))

for (i=0 ; i<length; i++)
{
    let number = prompt("enter the number to be added in array: ")
    numbers.push(number)
}

console.log("added number: "+numbers)

for(i=0; i<numbers.length; i++){
    if(numbers[i]%2 == 0)
    {
        console.log("printed the even numbers",numbers[i])
    }
}