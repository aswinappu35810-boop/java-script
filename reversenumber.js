
let num = prompt("Enter the 3 digit number to reverse: ")
if(num>100 && num<999)
{    
  let onum = num  
  let x = num % 10
    num = num - x
    num = num / 10

    let y = num % 10
    num = num - y
    num = num / 10

    let z = num % 10
    num = num - z
    num = num / 10

  let rnum = x*100+y*10+z

  console.log(rnum)

  if (onum == rnum){
    console.log("palindrom");
  }
  else{
    console.log("not palindrom");
    
  }
}
else{
  console.log("entred digit is not a 3 digit number");
  
}
