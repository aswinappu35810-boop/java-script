let profit = 0 
let sell = 0
let totalprofit = 0
let buyday = 0
let sellday = 0
let y = 0
let a = [120,20,10,5]
let x = a[0]
let buy = 0

for(i=0; i<a.length; i++)
{
    profit = a[i] - x
    if(profit>totalprofit)
        {
            totalprofit = profit 
            sell = a[i]
            buy = x
            sellday = i
            buyday = y
        }
    if(x>a[i])
        {
            x = a[i]
            y = i
        }    
}
if (totalprofit == 0)
    {
        console.log("No Profit Possible")
    }
else{
    console.log("buy price: "+buy)
    console.log("buy price day: "+buyday)
    console.log("sell price: "+sell)
    console.log("sell price day: "+sellday)
    console.log("max profit: "+totalprofit)
}