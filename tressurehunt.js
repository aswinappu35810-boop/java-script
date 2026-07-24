let t = [50,20,100,10,200,5,25]
let target = 250
let total = 0
let collected=[]
let skipped=[]
for (j=0; j<t.length; j++)
{
if(total+t[j] < target)
{
    total = total + t[j]
    collected.push(t[j]) 
}
else
{
    skipped.push(t[j])
    total = total
}

}
let rtarget = target-total
console.log("the collected coins: "+collected.toString())
console.log("the skipped coins: "+skipped.toString())
console.log("the total coins collected so far: "+total)
console.log("the remaining target: "+rtarget)
 // console.log(t[j])