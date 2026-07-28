let a=[1,2,4,1,1,1]
let found = false
let left = 0
let total = 0
let right = 0
let position = 0
for(i=0; i<a.length; i++)
    {
        total = total + a[i]
    }
for(i=0;i<a.length && !found; i++)
    {
        right =  total - left - a[i]
        if(right == left)
        {
            found = true
            position = i
            var sumleft = left
            var sumright = right
            var value = a[i]
        }
        else{
            left = left+a[i]
        }
    }


console.log(total);

if(!found){
    console.log("the array doesn't have equilibrium condition")
}
else{
    console.log("The number is at equilibrium: "+value+"\n"+"equilibrium index: "+position+"\n"+"sum of right: "+sumright+"\n"+"sum of left: "+sumleft)
}
