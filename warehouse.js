let a =[1,2,1,23,12,122,23,0,0,23,10,4]
let highest= 0
let flag= false
let low = 0
var countn = 0
let sum = 0
let count0 = 0
let counturgent = 0
let countlow = 0
let countnormal = 0
let replacement=[]
for(let i=0; i<a.length; i++)
    {
    if(a[i]!=0)
     {
     countn++
     sum = sum + a[i]
         if(!flag)
         {
             low = a[i]
             flag = true
         }
         else if(a[i]<low)
         {
            low = a[i]
         }
     }
    if(a[i]==0)
    {
        count0++
        replacement.push(i)
    }
    else if(1<=a[i] && a[i]<=10)
    {
        counturgent++
        // if(a[i] < x)
        // {
        //     x = a[i]
        // }
    }
    else if(11<=a[i] && a[i]<=20)
    {
        countlow++
    }
    else if(a[i]>20)
    {
        countnormal++
    }
   if(a[i]>highest)
   {
    highest = a[i]
   }
}

let avg = sum/countn
console.log("Count products that need replacement: "+count0)
console.log("Urgent Restocks: "+counturgent);
console.log("Low Stock Products: "+countlow);
console.log("Normal Stock Products: "+countnormal);
console.log("Replacement Indexes: "+replacement.toString());
console.log("Highest Stock: "+highest)

if(countn==0){
    console.log("no values are assigned ")
    
}
else{

    console.log("average stock: "+avg.toFixed(2))
}

if(flag==false)
{
    console.log("no values are assigned ")
}
else{

    console.log("lowest none zero value: "+low)
}
