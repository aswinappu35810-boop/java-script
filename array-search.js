let num =[1,2,3,4,5,6,7,8,9,10,11]                                    
let n= parseInt(prompt("Enter the number needed the to be searched: "))
var x = 0
for (i=0; i<num.length; i++)
{
if(n==num[i]){
    x=1
    alert("Number found at position "+i+" and the number is "+n+" found")
}
}

if (x==0)
{
    alert("the number "+n+" is not found")
}

