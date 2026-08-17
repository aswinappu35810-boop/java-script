let gas = [1,2,3,4,5]
let cost = [3,4,5,1,2]
let position = 0
let tank = 0
let found = false
for(i=0; i<gas.length; i++)
{

if(!found)
{
    if(gas[i]-cost[i]>=0)
    {
        position = i
        tank = gas[i]
        found = true
    }
}   

}
console.log (position);
